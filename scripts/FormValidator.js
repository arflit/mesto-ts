export class FormValidator {
  constructor (settings, formElement) {
    this._formElement = formElement; //вся форма
    this._inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._buttonElement = formElement.querySelector(settings.submitButtonSelector);
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass; 
    this._settings = settings;
  } 

  _enableButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }
  
  _disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', '');
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _showInputError(field) {
    const errorElement = this._formElement.querySelector(`.${field}-error`);
    field.classList.add(this._inputErrorClass);
    errorElement.textContent = field.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(field) {
    const errorElement = this._formElement.querySelector(`.${field}-error`);
    field.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _isValid(field) {
    if (!field.validity.valid) {
      this._showInputError(field);
    } else {
      this._hideInputError(field);
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener('input', () => {
      this._toggleButtonState();
    });
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._disableButton();
    });
//функция, перебирающая массив полей и навешивающая на каждое лисенер: 
    this._inputList.forEach(function(inputElement) {
      inputElement.addEventListener('input', () => {
        //вот это ниже не работает: "Cannot read property '_isValid' of undefined"
        this._isValid(inputElement);
      });
    });
  }

  enableValidation () {
    this._setEventListeners();
    this._toggleButtonState();
  }
}

