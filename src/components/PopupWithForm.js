import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._fields = Array.from(this._form.querySelectorAll('.popup__form-input'));
    this._submitButton = this._form.querySelector('.popup__form-submit-button');
  }

  setInputValues(data) {
    this._fields.forEach(field => {
      if(data[field.name]) {
        field.value = data[field.name]
      }
    });
  }

  setButtonLoading() {
    this._submitButton.innerHTML = 'Сохранение...';
    this._submitButton.classList.add('popup__form-submit-button_loading');

  }

  resetButton() {
    this._submitButton.innerHTML = 'Сохранить';
    this._submitButton.classList.remove('popup__form-submit-button_loading');
  }

  _getInputValues() {
    const values = {};
    this._fields.forEach((field) => values[field.name] = field.value);
    return values; 
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const values = this._getInputValues();
      this._handleFormSubmit(values);
    });
  }

  close() {
    super.close();
    this._form.reset();
    this.resetButton();
  }
}