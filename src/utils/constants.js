//Попапы
export const popupProfileSelector = '#popup-profile';
export const popupAddCardSelector = '#popup-addcard';
export const popupWithImageSelector = '#popup-bigpicture';
export const popupWithImagePictureSelector = '.popup__picture';
export const popupWithImageTitleSelector = '.popup__pic-title';
export const popupAvatarSelector = '#popup-avatar';
export const popupDeleteCardSelector = "#popup-delete-card";
//Кнопки вызова
export const editButton = document.querySelector('.profile__edit-button');
export const newPlaceButton = document.querySelector('.profile__add-button');
//Формы 
export const profileForm = document.forms.editform;
export const newCardForm = document.forms.addcardform;
export const avatarForm = document.forms.avatarform;
//Содержимое страницы 
export const avatarSelector = '.profile__avatar';
export const avatarEditButtonSelector = '.profile__avatar-edit-button';
export const avatarButtonVisible = 'profile__avatar-edit-button_visible';
export const nameSelector = '.profile__name';
export const aboutSelector = '.profile__about';
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
//Api
export const apiBaseUrl = 'https://mesto.nomoreparties.co/v1/cohort-19';
export const apiAutorizationToken = '0ea9232f-20d8-4231-b26e-2828aaef49f5'
