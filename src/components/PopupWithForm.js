import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._fields = Array.from(this._form.querySelectorAll('.popup__form-input'));
  }

  setInputValues(data) {
    this._fields.forEach(field => {
      if(data[field.name]) {
        field.value = data[field.name]
      }
    });
  }

  _getInputValues() {
    const values = {};
    this._fields.forEach((field) => values[field.name] = field.value);
    return values; 
  } //собирает данные всех полей формы

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
  }//при закрытии попапа форма должна ещё и сбрасываться.
}