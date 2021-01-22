import PopupWithForm from './PopupWithForm.js';
export default class PopupSubmit extends PopupWithForm {
  constructor (popupSelector, { handleFormSubmit }) {
    super(popupSelector, { handleFormSubmit });
  }

  open(data) {
    super.open();
    this._data = data;
  }

  _resetButton() {
    this._submitButton.innerHTML = 'Да';
    this._submitButton.classList.remove('popup__form-submit-button_loading');
  }

  close() {
    super.close();
    this._resetButton();
  }

  setEventListeners() {
    this._popup.addEventListener('click', this._handleOverlayClose);
    this._closeButton.addEventListener('click', () => this.close());
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._data);
    });
  }
}

