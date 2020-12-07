export class InputField {
  constructor(field, settings, form) {
    this._field = field;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass; 
    this._form = form;
  }

  _showInputError() {
    const errorElement = this._form.querySelector(`.${this._field.id}-error`);
    this._field.classList.add(this._inputErrorClass);
    errorElement.textContent = this._field.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError() {
    const errorElement = this._form.querySelector(`.${this._field.id}-error`);
    this._field.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _isValid() {
    if (!this._field.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  _setEventListeners() {
    this._field.addEventListener('input', () => {
      this._isValid();
    });
  }

  enableFieldValidation() {
    this._setEventListeners();
  }
}