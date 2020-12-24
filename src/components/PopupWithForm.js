import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._fields = Array.from(this._form.querySelectorAll('.popup__form-input'));
  }

  _setInputValues(values) {
    this._fields.forEach((field, i) => {
      field.value = values[i];
    })
  }

  _getInputValues() {
    const values = this._fields.map((field) => {
      return field.value;
    });
    return values;
  } //собирает данные всех полей формы

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', this._handleFormSubmit);
  } //не только добавлять обработчик клика иконке закрытия, но и 
  //добавлять обработчик сабмита формы.

  close() {
    super.close();
    this._form.reset();
    this._form.removeEventListener('submit', this._handleFormSubmit);
  }//при закрытии попапа форма должна ещё и сбрасываться.
}