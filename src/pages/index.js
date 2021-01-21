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
  jobSelector,
  avatarSelector,
  avatarEditButtonSelector,
  avatarButtonVisible,
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
import Avatar from '../components/Avatar.js';


const profileFormValidation = new FormValidator(validationSettings, profileForm);
profileFormValidation.enableValidation();
const newCardFormValidation = new FormValidator(validationSettings, newCardForm);
newCardFormValidation.enableValidation();
const newAvatarFormValidation = new FormValidator(validationSettings, avatarForm);
newAvatarFormValidation.enableValidation();

const avatar = new Avatar(avatarSelector, avatarEditButtonSelector, avatarButtonVisible, {
  handleEditButton: () => {
    popupAvatar.open();
  }
});

avatar.enableEditButton();

const popupAvatar = new PopupWithForm(popupAvatarSelector, {
  handleFormSubmit: (values) => {
    avatar.setNewAvatar(values);
    popupAvatar.close();
  }
});

popupAvatar.setEventListeners();

const userInfo = new UserInfo(nameSelector, jobSelector);

const popupProfile = new PopupWithForm(popupProfileSelector, {
  handleFormSubmit: (values) => {
    userInfo.setUserInfo(values);
    popupProfile.close();
  }
});

popupProfile.setEventListeners();

editButton.addEventListener('click', function(){
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
});


const popupNewCard = new PopupWithForm(popupAddCardSelector, {
  handleFormSubmit: (values) => {
    defaultCardList.addItem(values);
    popupNewCard.close();
  }
});

popupNewCard.setEventListeners();

newPlaceButton.addEventListener('click', function(){
  popupNewCard.open();
});

const popupWithImage = new PopupWithImage(popupWithImageSelector, popupWithImagePictureSelector, popupWithImageTitleSelector);

popupWithImage.setEventListeners();

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const placeImage = item.picture;
    const placeTitle = item.place;
    const cardElement = new Card(placeTitle, placeImage, cardTemplateSelector, {
      handleCardClick: (placeImage, placeTitle) => {
        popupWithImage.open(placeImage, placeTitle);  
      }
    });
    const cardGenerated = cardElement.generateCard();
    cardElement.addCard(defaultCardList, cardGenerated);
    }
}, cardsListSelector);

defaultCardList.renderItems();





