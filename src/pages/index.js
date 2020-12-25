import './index.css';

import {
  popupProfileSelector, 
  popupAddCardSelector, 
  editButton, 
  newPlaceButton,
  popupHideButtons,
  profileForm,
  newCardForm,
  profileNameField,
  profileJobField,
  newCardPlaceField,
  newCardPictureField,
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

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const placeImage = item.link;
    const placeTitle = item.name;
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

editButton.addEventListener('click', function(){
  const popupProfile = new PopupWithForm(popupProfileSelector, {
    handleFormSubmit: (evt) => {
      evt.preventDefault();
      const values = popupProfile._getInputValues();
      userInfo.setUserInfo(values[0], values[1]);
      popupProfile.close();
    }
  });
  popupProfile._setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});


newPlaceButton.addEventListener('click', function(){
  const popupNewCard = new PopupWithForm(popupAddCardSelector, {
    handleFormSubmit: (evt) => {
      evt.preventDefault();
      const values = popupNewCard._getInputValues();
      const data = {
        name: values[0],
        link: values[1]
      };
      defaultCardList.addItem(data);
      popupNewCard.close();
    }
  });
  popupNewCard.open();
});
