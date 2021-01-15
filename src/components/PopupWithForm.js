import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._fields = Array.from(this._form.querySelectorAll('.popup__form-input'));
  }

  _setInputValues({ name, job }) {
    this._fields[0].value = name;
    this._fields[1].value = job;
  }

  _getInputValues() {
    const values = {};
    this._fields.forEach((field) => values[field.name] = field.value);
    return values; 
  } //собирает данные всех полей формы

  setFormSubmitListener() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }//при закрытии попапа форма должна ещё и сбрасываться.
}