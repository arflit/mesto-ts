let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close')
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');

function openPopup () {
popup.classList.add('popup_opened');
nameInput.setAttribute('value', profileName.textContent);
jobInput.setAttribute('value', profileJob.textContent);
}

function closePopup () {
popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
evt.preventDefault();
let newName = document.querySelector('#name');
let newJob = document.querySelector('#job');
console.log(newName.value);
profileName.textContent = newName.value;
profileJob.textContent = newJob.value;
closePopup();
}

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) closePopup();
});