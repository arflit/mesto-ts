import './pages/index.css';

//Попапы
const popupProfile = document.querySelector('#popup-profile');
const popupAddCard = document.querySelector('#popup-addcard');
//Кнопки вызова
const editButton = document.querySelector('.profile__edit-button');
const newPlaceButton = document.querySelector('.profile__add-button');
//Кнопки закрытия
const popupHideButtons = document.querySelectorAll('.popup__close-button');
//Формы 
const profileForm = document.forms.editform;
const newCardForm = document.forms.addcardform;
//Поля
const profileNameField = profileForm.elements.name;
const profileJobField = profileForm.elements.job;
const newCardPlaceField = newCardForm.elements.place;
const newCardPictureField = newCardForm.elements.picture;
//Содержимое страницы 
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//Добавление карточек
const cardsList = document.querySelector('.cards__list');
import { Card } from './scripts/Card.js';
//валидация
import { FormValidator } from './scripts/FormValidator.js';
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit-button',
  inactiveButtonClass: 'popup__form-submit-button_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-error_visible'
}
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
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

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

