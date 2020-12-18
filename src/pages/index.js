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
  initialCards
} from '../utils/constants.js';


import { Card } from '../components/Card.js';
//валидация
import { FormValidator } from '../components/FormValidator.js';

const profileFormValidation = new FormValidator(validationSettings, profileForm);
profileFormValidation.enableValidation();
const newCardFormValidation = new FormValidator(validationSettings, newCardForm);
newCardFormValidation.enableValidation();

//закрытие попапов

function hidePopup (popup) {
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keydown', listenEsc);  
}

function listenEsc (evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    hidePopup(popup);
  }
}

function addEscapeListerner () {
  document.addEventListener('keydown', listenEsc);  
}

function addOverlayListener (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) hidePopup(evt.target.closest('.popup'));
  });
}

popupHideButtons.forEach(function (button) {
  button.addEventListener('click', function(evt) {
    const popup = evt.target.closest('.popup');
    hidePopup(popup);
  });
});

//открытие попапов

export function showPopup(popup) {
  popup.classList.add('popup_opened');
  addOverlayListener(popup);
  addEscapeListerner(popup);
}
function openPopupProfile () {
  profileNameField.value = profileName.textContent;
  profileJobField.value = profileJob.textContent;
  showPopup(popupProfile);
}

function addCard (placeTitle, placeImage) {
  const cardElement = new Card(placeTitle, placeImage, '.tempcard');
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

