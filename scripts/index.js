//Попапы
const popupProfile = document.querySelector('#popup-profile');
const popupAddCard = document.querySelector('#popup-addcard');
const popupBigPicture = document.querySelector('#popup-bigpicture');
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
//Попап с большой картинкой
const popupBigPicturePicture = popupBigPicture.querySelector('.popup__picture');
const popupBigPictureTitle = popupBigPicture.querySelector('.popup__pic-title');
//Содержимое страницы 
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//Добавление карточек
const cardsList = document.querySelector('.cards__list');
const tempCard = document.querySelector('#tempcard').content;

function hidePopup () {
  const popupOpened = document.querySelector('.popup_opened');
  if (popupOpened) popupOpened.classList.remove('popup_opened');
}

function showPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) hidePopup();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') hidePopup();
  });  
}
function openPopupProfile () {
  profileNameField.value = profileName.textContent;
  profileJobField.value = profileJob.textContent;
  showPopup(popupProfile);
}

function openPopupAddCard () {
  newCardForm.reset();
  showPopup(popupAddCard);
}

function openPopupBigPicture (image, title) {
  popupBigPicturePicture.src = image;
  popupBigPicturePicture.alt = title;
  popupBigPictureTitle.textContent = title;
  showPopup(popupBigPicture);
}

//Лайки в карточках
function switchLike(button) {
  button.classList.toggle('card__like_active');
}

cardsList.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('card__like')) {
    switchLike(evt.target);
  }
});

//Удаление карточки
function deleteCard(button) {
  const delCardItem = button.closest('.card');
  delCardItem.remove();
}

cardsList.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('card__trash-button')) {
    deleteCard(evt.target);
  }
});


//добавление карточки
function getCard (placeTitle, placeImage) {
  const cardElement = tempCard.cloneNode(true);
  const picture = cardElement.querySelector('.card__image');
  const title = cardElement.querySelector('.card__title');
  picture.src = placeImage;
  picture.alt = placeTitle;
  title.textContent = placeTitle;
  return cardElement;
}


function addCard (placeTitle, placeImage) {
  const cardElement = getCard (placeTitle, placeImage);
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

//попап редактирования имени
editButton.addEventListener('click', openPopupProfile);
profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameField.value;
  profileJob.textContent = profileJobField.value;
  hidePopup();
});

//попап добавления карточки
newPlaceButton.addEventListener('click', openPopupAddCard);
newCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const placeTitle = newCardPlaceField.value;
  const placeImage = newCardPictureField.value;
  addCard (placeTitle, placeImage);
  hidePopup();
});

//попап с большой картинкой
cardsList.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('card__image')) {
    const url = evt.target.src;
    const title = evt.target.closest('.card').querySelector('.card__title').textContent;
    openPopupBigPicture(url, title);
  }
});

//закрытие попапа
popupHideButtons.forEach(function (button) {
  button.addEventListener('click', hidePopup);
});

