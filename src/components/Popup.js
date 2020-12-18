export default class Popup {

  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose() {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose() {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose());
    this._popup.addEventListener('click', this._handleOverlayClose());
    this._popup.querySelector('.popup__close-button').addEventListener('click', this.close());
  }

  removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose());
    this._popup.removeEventListener('click', this._handleOverlayClose());
    this._popup.querySelector('.popup__close-button').removeEventListener('click', this.close());
  }
}