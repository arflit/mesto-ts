//генеральный попап
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupHideButton = document.querySelector('.popup__close-button');
const animationDuration = 500;
//попап с формой
const popupTempForm = document.querySelector('#popup-form').content;
//попап редактирования имени
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//добавление карточек
const cardsList = document.querySelector('.cards__list');
const tempCard = document.querySelector('#tempcard').content;
//попап добавления карточки
const newPlaceButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup-card');
const formCardElement = document.querySelector('.popup-card__form');
//попап с картинкой
const popupTempPicture = document.querySelector('#popup-picture').content;



function openPopup (popupType) {
  popup.classList.add('popup_opened');
  popupContainer.classList.add(popupType);
}

function hidePopup () {  
  popup.classList.remove('popup_opened');

  setTimeout(() => {
    popupContainer.classList.remove('popup__container_form');
    popupContainer.classList.remove('popup__container_picture');
    const todel = [popup.querySelector('.popup__form');
    const todel2 = popup.querySelector('.popup__picture');
    const todel3 = popup.querySelector('.popup__pic-title');
    if (todel != null) todel.remove();
    if (todel2 != null) todel2.remove();
    if (todel3 != null) todel3.remove();
    popup.classList.remove('popup_dark');
  }, animationDuration);

}


function openPopupForm (title, field1, field2) {

  const popupForm = popupTempForm.cloneNode(true);
  const popupTitle = popupForm.querySelector('.popup__form-title');
  const popupField1 = popupForm.querySelectorAll('.popup__form-input')[0];
  const popupField2 = popupForm.querySelectorAll('.popup__form-input')[1];
  
  popupTitle.textContent = title;
  
  popupField1.id = field1.id;
  popupField1.name = field1.name;
  popupField1.placeholder = field1.placeholder;
  popupField1.value = field1.value;
  
  popupField2.id = field2.id;
  popupField2.name = field2.name;
  popupField2.placeholder = field2.placeholder;
  popupField2.value = field2.value;

  popupContainer.append(popupForm);


  const ListeningForm = document.querySelector('.popup__form');
  
  ListeningForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (field1.id === 'name') {
      profileName.textContent = document.querySelector('#name').value;
      profileJob.textContent = document.querySelector('#job').value;
    } 
    if (field1.id === 'place') {
      const placeTitle = document.querySelector('#place').value;
      const placeImage = document.querySelector('#picture').value;
      addCard (placeTitle, placeImage);
    }
    
    hidePopup();
  });

  openPopup('popup__container_form');
}

function openPopupName () {
  const title = 'Редактировать профиль';
  const name = {};
  const job = {};

  name.id = 'name';
  name.name = 'name';
  name.placeholder = 'Введите имя';
  name.value = profileName.textContent;

  job.id = 'job';
  job.name = 'job';
  job.placeholder = 'А чем занимаетесь?';
  job.value = profileJob.textContent;

  openPopupForm (title, name, job);
}

function openPopupCard () {
  const title = 'Новое место';
  const picture = {};
  const place = {};

  place.id = 'place';
  place.name = 'place';
  place.placeholder = 'Название';
  place.value = null;

  picture.id = 'picture';
  picture.name = 'picture';
  picture.placeholder = 'Ссылка на картинку';
  picture.value = null;

  openPopupForm (title, place, picture);
}

function openPopupImage (image, title) {
  popup.classList.add('popup_dark');

  const popupContent = popupTempPicture.cloneNode(true);
  const popupImage = popupContent.querySelector('.popup__picture');
  const popupTitle = popupContent.querySelector('.popup__pic-title');

  popupImage.src = image;
  popupImage.alt = title;
  popupTitle.textContent = title;

  popupContainer.append(popupContent);
  openPopup('popup__container_picture');
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
  picture.addEventListener('click', function () {
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

//попап редактирования имени
editButton.addEventListener('click', openPopupName);

//попап добавления карточки
newPlaceButton.addEventListener('click', openPopupCard);

//закрытие попапа
popupHideButton.addEventListener('click', hidePopup);
document.addEventListener('keydown', function(e) {
  const keyCode = e.keyCode;
  if (keyCode === 27) hidePopup();
});
