let editButton = document.querySelector('.profile__edit-button');
let popupNameCloseButton = document.querySelector('.popup-name__close')
let popupName = document.querySelector('.popup-name');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup-name__form')
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');

function openPopupName () {
popupName.classList.add('popup-name_opened');
nameInput.setAttribute('value', profileName.textContent);
jobInput.setAttribute('value', profileJob.textContent);
}

function closePopupName () {
popupName.classList.remove('popup-name_opened');
}

function formSubmitHandler (evt) {
evt.preventDefault();
let newName = document.querySelector('#name');
let newJob = document.querySelector('#job');
console.log(newName.value);
profileName.textContent = newName.value;
profileJob.textContent = newJob.value;
closePopupName();
}

editButton.addEventListener('click', openPopupName);
popupNameCloseButton.addEventListener('click', closePopupName);
formElement.addEventListener('submit', formSubmitHandler);
document.addEventListener('keydown', function(e) {
  let keyCode = e.keyCode;
  if (keyCode === 27) closePopupName();
});