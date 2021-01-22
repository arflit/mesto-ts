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
    .then((url) => {avatar.setNewAvatar(values);})
    .then(() => {popupAvatar.close();});
    }
});

popupAvatar.setEventListeners();

let myID = '';
const userInfo = new UserInfo(nameSelector, aboutSelector);
api.getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
    avatar.setNewAvatar(data);
    myID = data._id;
  });

const popupProfile = new PopupWithForm(popupProfileSelector, {
  handleFormSubmit: (values) => {
    popupProfile.setButtonLoading();
    api.updateUserInfo(values)
    .then((data) => {userInfo.setUserInfo(data);})
    .then(() => {popupProfile.close();})    
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
    });
    popupNewCard.close();
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
      console.log(card);
      card.remove();
    })
    .then(() => {    popupDeleteCard.close();
    });
  }
});

popupDeleteCard.setEventListeners();

const popupWithImage = new PopupWithImage(popupWithImageSelector, popupWithImagePictureSelector, popupWithImageTitleSelector);

popupWithImage.setEventListeners();

let defaultCardList = {};

const getInitialCards =  api.getInitialCards();
getInitialCards
  .then((data) => {

    defaultCardList = new Section({
      items: data,
      renderer: (data) => {
        const cardElement = new Card(myID, data, cardTemplateSelector, {
          handleCardClick: (placeImage, placeTitle) => {
            popupWithImage.open(placeImage, placeTitle);  
          }, 
          handleCardRemove: (card) => {
            const id = cardElement.getCardID();
            popupDeleteCard.open({ 
              card: card, 
              id: id });
          },
          handleLikeClick: (evt) => {
            if (cardElement.liked) {
              api.removeCardLike(cardElement.getCardID())
              .then((data) => {
                cardElement.refreshLikes(data);
              });
            }
            else {
              api.addCardLike(cardElement.getCardID())
              .then((data) => {
                cardElement.refreshLikes(data);
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






