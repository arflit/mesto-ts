//попап редактирования имени
let editButton = document.querySelector('.profile__edit-button');
let popupNameCloseButton = document.querySelector('.popup-name__close')
let popupName = document.querySelector('.popup-name');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let formElement = document.querySelector('.popup-name__form')
//добавление карточек
let cardsList = document.querySelector('.cards__list');
let tempCard = document.querySelector('#tempcard').content;
//попап добавления карточки
let newPlaceButton = document.querySelector('.profile__add-button');
let popupCardCloseButton = document.querySelector('.popup-card__close')
let popupCard = document.querySelector('.popup-card');
let titleInput = document.querySelector('#place-title');
let imageInput = document.querySelector('#place-image');
let formCardElement = document.querySelector('.popup-card__form')
//попап с картинкой
let popupImage = document.querySelector('.popup-image');
let popupImageCloseButton = document.querySelector('.popup-image__close')
let popupImageContainer = document.querySelector('.popup-image__container');

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

function closePopup () {
popupCard.classList.remove('popup-opened');
popupName.classList.remove('popup-opened');
popupImage.classList.remove('popup-opened');
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
let newName = document.querySelector('#name');
let newJob = document.querySelector('#job');
profileName.textContent = newName.value;
profileJob.textContent = newJob.value;
closePopup();
}

//обработчик добавления карточек
function cardSubmitHandler (evt) {
evt.preventDefault();
let placeTitle = titleInput.value;
let placeImage = imageInput.value;
addCard (placeTitle, placeImage);
closePopup();
}

//попап редактирования имени
editButton.addEventListener('click', openPopupName);
popupNameCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

//попап добавления карточки
newPlaceButton.addEventListener('click', openPopupCard);
popupCardCloseButton.addEventListener('click', closePopup);
formCardElement.addEventListener('submit', cardSubmitHandler);

//попап с картинкой
popupImageCloseButton.addEventListener('click', closePopup);


document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) closePopup();
});