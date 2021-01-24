import './index.css';

import {
  popupProfileSelector, 
  popupAddCardSelector, 
  popupAvatarSelector,
  editButton, 
  newPlaceButton,
  profileForm,
  newCardForm,
  avatarForm,
  nameSelector,
  aboutSelector,
  avatarSelector,
  avatarEditButtonSelector,
  avatarButtonVisible,
  cardsListSelector,
  cardTemplateSelector,
  validationSettings,
  popupWithImageSelector,
  popupWithImagePictureSelector,
  popupWithImageTitleSelector,
  popupDeleteCardSelector,
  apiBaseUrl,
  apiAutorizationToken
} from '../utils/constants.js';

import Card from '../components/Card.js';
//валидация
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Avatar from '../components/Avatar.js';
import PopupSubmit from '../components/PopupSubmit.js';
import Api from '../components/Api.js';

const profileFormValidation = new FormValidator(validationSettings, profileForm);
profileFormValidation.enableValidation();
const newCardFormValidation = new FormValidator(validationSettings, newCardForm);
newCardFormValidation.enableValidation();
const newAvatarFormValidation = new FormValidator(validationSettings, avatarForm);
newAvatarFormValidation.enableValidation();

const api = new Api({
  baseUrl: apiBaseUrl,
  headers: {
    authorization: apiAutorizationToken,
    'Content-Type': 'application/json'
  }
}); 

const avatar = new Avatar(avatarSelector, avatarEditButtonSelector, avatarButtonVisible, {
  handleEditButton: () => {
    popupAvatar.open();
  }
});

avatar.enableEditButton();

const popupAvatar = new PopupWithForm(popupAvatarSelector, {
  handleFormSubmit: (values) => {
    popupAvatar.setButtonLoading();
    api.setNewAvatar(values.avatar)
    .then((data) => {avatar.setNewAvatar(data);})
    .then(() => {popupAvatar.close();})
    .catch((err) => {
      console.log(`Почему-то не получилось обновить аватар: ${err}`);
      popupAvatar.resetButton();
    });
    }
});

popupAvatar.setEventListeners();

let myID = '';

const userInfo = new UserInfo(nameSelector, aboutSelector);

function getUserInfo () {
  return api.getUserInfo();
}

getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
    avatar.setNewAvatar(data);
    myID = data._id;
  })
  .catch((err) => {
    console.log(`Почему-то не получилось получить с сервера информацию о пользователе: ${err}`);
  });



const popupProfile = new PopupWithForm(popupProfileSelector, {
  handleFormSubmit: (values) => {
    popupProfile.setButtonLoading();
    api.updateUserInfo(values)
    .then((data) => {userInfo.setUserInfo(data);})
    .then(() => {popupProfile.close();})
    .catch((err) => {
      console.log(`Почему-то не получилось установить пользователя: ${err}`);
      popupProfile.resetButton();
    });
  }
});

popupProfile.setEventListeners();

editButton.addEventListener('click', function(){
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});


const popupNewCard = new PopupWithForm(popupAddCardSelector, {
  handleFormSubmit: (values) => {
    values.name = values.place;
    delete values.place;
    popupNewCard.setButtonLoading();
    api.addNewCard(values)
    .then((data) => {
      defaultCardList.addItem(data);
    })
    .then(() => {popupNewCard.close();})
    .catch((err) => {
      console.log(`Почему-то не получилось создать новую карточку: ${err}`);
      popupNewCard.resetButton();
    });
    
  }
});

popupNewCard.setEventListeners();

newPlaceButton.addEventListener('click', function(){
  popupNewCard.open();
});

const popupDeleteCard = new PopupSubmit(popupDeleteCardSelector, {
  handleFormSubmit: ({ card, id }) => {
    popupDeleteCard.setButtonLoading();
    api.removeCard(id)
    .then(() => {  
      card.handleCardRemove(); 
    })
    .then(() => {popupDeleteCard.close();})
    .catch((err) => {
      console.log(`Почему-то не получилось удалить карточку: ${err}`);
      popupDeleteCard.resetButton();
    });
  }
});

popupDeleteCard.setEventListeners();

const popupWithImage = new PopupWithImage(popupWithImageSelector, popupWithImagePictureSelector, popupWithImageTitleSelector);

popupWithImage.setEventListeners();


function getInitialCards () {
  return api.getInitialCards();
}

const initialCards = getInitialCards();
  
const promises = [getUserInfo(), initialCards];

let defaultCardList = {};

Promise.all(promises)
.then(
  initialCards
)
  .then((data) => {
    defaultCardList = new Section({
      items: data[1],
      renderer: (data) => {
        const cardElement = new Card(myID, data, cardTemplateSelector, {
          handleCardClick: (placeImage, placeTitle) => {
            popupWithImage.open(placeImage, placeTitle);  
          }, 
          handleCardRemove: () => {
            const id = cardElement.getCardID();
            popupDeleteCard.open({ 
              card: cardElement, 
              id: id });
          },
          handleLikeClick: (evt) => {
            if (cardElement.liked) {
              api.removeCardLike(cardElement.getCardID())
              .then((data) => {
                cardElement.refreshLikes(data);
              })
              .catch((err) => {
                console.log(`Почему-то не получилось удалить лайк: ${err}`);
              });
            }
            else {
              api.addCardLike(cardElement.getCardID())
              .then((data) => {
                cardElement.refreshLikes(data);
              })
              .catch((err) => {
                console.log(`Почему-то не получилось поставить лайк: ${err}`);
              });
            }
            
          }
        });
        const cardGenerated = cardElement.generateCard();
        cardElement.addCard(defaultCardList, cardGenerated);
        }
    }, cardsListSelector);
    
    defaultCardList.renderItems();
    

  });






