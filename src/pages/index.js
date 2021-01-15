import './index.css';

import {
  popupProfileSelector, 
  popupAddCardSelector, 
  editButton, 
  newPlaceButton,
  profileForm,
  newCardForm,
  nameSelector,
  jobSelector,
  cardsListSelector,
  cardTemplateSelector,
  validationSettings,
  initialCards,
  popupWithImageSelector,
  popupWithImagePictureSelector,
  popupWithImageTitleSelector
} from '../utils/constants.js';

import Card from '../components/Card.js';
//валидация
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


const profileFormValidation = new FormValidator(validationSettings, profileForm);
profileFormValidation.enableValidation();
const newCardFormValidation = new FormValidator(validationSettings, newCardForm);
newCardFormValidation.enableValidation();

const userInfo = new UserInfo(nameSelector, jobSelector);


const popupProfile = new PopupWithForm(popupProfileSelector, {
  handleFormSubmit: () => {
    const values = popupProfile._getInputValues();
    userInfo.setUserInfo(values);
    popupProfile.close();
  }
});

popupProfile.setFormSubmitListener();

editButton.addEventListener('click', function(){
  popupProfile._setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});


const popupNewCard = new PopupWithForm(popupAddCardSelector, {
  handleFormSubmit: () => {
    const values = popupNewCard._getInputValues();
    defaultCardList.addItem(values);
    popupNewCard.close();
  }
});

popupNewCard.setFormSubmitListener();

newPlaceButton.addEventListener('click', function(){
  popupNewCard.open();
});



const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const placeImage = item.picture;
    const placeTitle = item.place;
    const cardElement = new Card(placeTitle, placeImage, cardTemplateSelector, {
      handleCardClick: (placeImage, placeTitle) => {
        const popupWithImage = new PopupWithImage(popupWithImageSelector, placeImage, placeTitle, popupWithImagePictureSelector, popupWithImageTitleSelector);
        popupWithImage.open();  
      }
    });
    const cardGenerated = cardElement.generateCard();
    defaultCardList._container.prepend(cardGenerated);
    }
}, cardsListSelector);

defaultCardList.renderItems();





