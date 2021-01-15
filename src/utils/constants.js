//Попапы
export const popupProfileSelector = '#popup-profile';
export const popupAddCardSelector = '#popup-addcard';
export const popupWithImageSelector = '#popup-bigpicture';
export const popupWithImagePictureSelector = '.popup__picture';
export const popupWithImageTitleSelector = '.popup__pic-title';
//Кнопки вызова
export const editButton = document.querySelector('.profile__edit-button');
export const newPlaceButton = document.querySelector('.profile__add-button');
//Формы 
export const profileForm = document.forms.editform;
export const newCardForm = document.forms.addcardform;
//Содержимое страницы 
export const nameSelector = '.profile__name';
export const jobSelector = '.profile__job';
//Добавление карточек
export const cardsListSelector = '.cards__list';
export const cardTemplateSelector = '.tempcard';
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
      place: 'Архыз',
      picture: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      place: 'Челябинская область',
      picture: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      place: 'Иваново',
      picture: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      place: 'Камчатка',
      picture: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      place: 'Холмогорский район',
      picture: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      place: 'Байкал',
      picture: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 