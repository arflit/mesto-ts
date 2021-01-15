export default class Popup {

  constructor( popupSelector ) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
    this._handleOverlayClose = (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    }
    this._handleCloseButton = () => {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setClosingListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeClosingListeners();
  }

  _setClosingListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleOverlayClose);
    this._closeButton.addEventListener('click', this._handleCloseButton);
  }

  _removeClosingListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleOverlayClose);
    this._closeButton.removeEventListener('click', this._handleCloseButton);
  }
}