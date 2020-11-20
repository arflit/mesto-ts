//попап редактирования имени
const editButton = document.querySelector('.profile__edit-button');
const popupNameCloseButton = document.querySelector('.popup-name__close')
const popupName = document.querySelector('.popup-name');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const formElement = document.querySelector('.popup-name__form')
//добавление карточек
const cardsList = document.querySelector('.cards__list');
const tempCard = document.querySelector('#tempcard').content;
//попап добавления карточки
const newPlaceButton = document.querySelector('.profile__add-button');
const popupCardCloseButton = document.querySelector('.popup-card__close')
const popupCard = document.querySelector('.popup-card');
const titleInput = document.querySelector('#place-title');
const imageInput = document.querySelector('#place-image');
const formCardElement = document.querySelector('.popup-card__form')
//попап с картинкой
const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = document.querySelector('.popup-image__close')
const popupImageContainer = document.querySelector('.popup-image__container');

function openPopupName () {
popupName.classList.add('popup-opened');
nameInput.setAttribute('value', profileName.textContent);
jobInput.setAttribute('value', profileJob.textContent);
}

function openPopupCard () {
popupCard.classList.add('popup-opened');
}

function openPopupImage (image, title) {
popupImage.classList.add('popup-opened');
popupImageContainer.querySelector('.popup-image__picture').src = image;
popupImageContainer.querySelector('.popup-image__picture').alt = title;
popupImageContainer.querySelector('.popup-image__title').textContent = title;
}

function closePopupName () {
popupName.classList.add('popup-closing');
setTimeout(() => {  popupName.classList.remove('popup-opened');
popupName.classList.remove('popup-closing'); }, 500);
}

function closePopupCard () {
popupCard.classList.add('popup-closing');
setTimeout(() => {  popupCard.classList.remove('popup-opened');
popupCard.classList.remove('popup-closing'); }, 500);
}

function closePopupImage () {
popupImage.classList.add('popup-closing');
setTimeout(() => {  popupImage.classList.remove('popup-opened');
popupImage.classList.remove('popup-closing'); }, 500);
}

//добавление карточки
function addCard (placeTitle, placeImage) {
const cardElement = tempCard.cloneNode(true);
cardElement.querySelector('.card__image').src = placeImage;
cardElement.querySelector('.card__image').alt = placeTitle;
cardElement.querySelector('.card__title').textContent = placeTitle;

const likeButton = cardElement.querySelector('.card__like');
likeButton.addEventListener('click', function (evt) {
const eventTarget = evt.target;
eventTarget.classList.toggle('card__like_active');
});

const picture = cardElement.querySelector('.card__image');
picture.addEventListener('click', function (evt) {
openPopupImage(placeImage, placeTitle);
});

const deleteButton = cardElement.querySelector('.card__trash-button');
deleteButton.addEventListener('click', function (evt) {
const delEventTarget = evt.target;
const delCardItem = delEventTarget.closest('.card');
delCardItem.remove();
}); 

cardsList.prepend(cardElement);
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

//обработчик редактирования имени
function formSubmitHandler (evt) {
evt.preventDefault();
const newName = document.querySelector('#name');
const newJob = document.querySelector('#job');
profileName.textContent = newName.value;
profileJob.textContent = newJob.value;
closePopup();
}

//обработчик добавления карточек
function cardSubmitHandler (evt) {
evt.preventDefault();
const placeTitle = titleInput.value;
const placeImage = imageInput.value;
addCard (placeTitle, placeImage);
closePopup();
}

//попап редактирования имени
editButton.addEventListener('click', openPopupName);
popupNameCloseButton.addEventListener('click', closePopupName);
formElement.addEventListener('submit', formSubmitHandler);

//попап добавления карточки
newPlaceButton.addEventListener('click', openPopupCard);
popupCardCloseButton.addEventListener('click', closePopupCard);
formCardElement.addEventListener('submit', cardSubmitHandler);

//попап с картинкой
popupImageCloseButton.addEventListener('click', closePopupImage);

/*
document.addEventListener('keydown', function(e) {
  const keyCode = e.keyCode;
  if (keyCode === 27) closePopup();
});
*/