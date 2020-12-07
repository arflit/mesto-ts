import { InputField } from './InputField.js';
export class FormValidator {
  constructor (settings, formElement) {
    this._formElement = formElement; //вся форма
    this._inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._buttonElement = formElement.querySelector(settings.submitButtonSelector);
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

  _setEventListeners() {
    this._formElement.addEventListener('input', () => {
      this._toggleButtonState();
    });
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._disableButton();
    });
  }

  enableValidation () {
    const settings = this._settings;
    const form = this._formElement;
    this._inputList.forEach(function(inputElement) {
      const field = new InputField(inputElement, settings, form);
      field.enableFieldValidation();
    });
    this._setEventListeners();
    this._toggleButtonState();
  }
}

