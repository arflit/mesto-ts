import './index.css';

import {
  popupProfile, 
  popupAddCard, 
  editButton, 
  newPlaceButton,
  popupHideButtons,
  profileForm,
  newCardForm,
  profileNameField,
  profileJobField,
  newCardPlaceField,
  newCardPictureField,
  profileName,
  profileJob,
  cardsList,
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
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';







const profileFormValidation = new FormValidator(validationSettings, profileForm);
profileFormValidation.enableValidation();
const newCardFormValidation = new FormValidator(validationSettings, newCardForm);
newCardFormValidation.enableValidation();


//открытие попапов

/* function showPopup(popup) {
  popup.classList.add('popup_opened');
  addOverlayListener(popup);
  addEscapeListerner(popup);
} */
function openPopupProfile () {
  profileNameField.value = profileName.textContent;
  profileJobField.value = profileJob.textContent;
/*   showPopup(popupProfile);
 */}

function addCard (placeTitle, placeImage) {
  const cardElement = new Card(placeTitle, placeImage, '.tempcard', {
    handleCardClick: (image, title) => {
      const popupWithImage = new PopupWithImage(popupWithImageSelector, image, title, popupWithImagePictureSelector, popupWithImageTitleSelector);
      popupWithImage.open();
    }
  });
  cardsList.prepend(cardElement.generateCard());
}

//добавление карточек на старте


initialCards.forEach(function (item) {
  addCard (item.name, item.link);
});

//попап редактирования имени
editButton.addEventListener('click', openPopupProfile);
profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameField.value;
  profileJob.textContent = profileJobField.value;
  hidePopup(popupProfile);
});


//попап добавления карточки
newPlaceButton.addEventListener('click', function(){showPopup(popupAddCard);});

newCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const placeTitle = newCardPlaceField.value;
  const placeImage = newCardPictureField.value;
  addCard (placeTitle, placeImage);
  hidePopup(popupAddCard);
  newCardForm.reset();
});

