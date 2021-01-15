import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageSelector, titleSelector) {
    super(popupSelector);
    this._popupPicture = this._popup.querySelector(imageSelector);
    this._popupTitle = this._popup.querySelector(titleSelector);
  }
  
   open(image, title) {
    this._popupPicture.src = image;
    this._popupPicture.alt = title;
    this._popupTitle.textContent = title;
    super.open();
  }
}