//Попапы
export const popupProfile = document.querySelector('#popup-profile');
export const popupAddCard = document.querySelector('#popup-addcard');
//Кнопки вызова
export const editButton = document.querySelector('.profile__edit-button');
export const newPlaceButton = document.querySelector('.profile__add-button');
//Кнопки закрытия
export const popupHideButtons = document.querySelectorAll('.popup__close-button');
//Формы 
export const profileForm = document.forms.editform;
export const newCardForm = document.forms.addcardform;
//Поля
export const profileNameField = profileForm.elements.name;
export const profileJobField = profileForm.elements.job;
export const newCardPlaceField = newCardForm.elements.place;
export const newCardPictureField = newCardForm.elements.picture;
//Содержимое страницы 
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
//Добавление карточек
export const cardsList = document.querySelector('.cards__list');
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit-button',
  inactiveButtonClass: 'popup__form-submit-button_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-error_visible'
}
export const initialCards = [
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