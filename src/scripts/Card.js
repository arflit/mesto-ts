import { showPopup } from '../index.js';

export class Card {

  constructor (placeTitle, placeImage, cardSelector) {
    this._title = placeTitle;
    this._image = placeImage;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  _handleLikeClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _handleCardRemove() {
    this._element.remove();
  }

  _openPopupBigPicture () {
    const popupBigPicture = document.querySelector('#popup-bigpicture');
    const popupPicture = popupBigPicture.querySelector('.popup__picture');
    const popupTitle = popupBigPicture.querySelector('.popup__pic-title');
    
    popupPicture.src = this._image;
    popupPicture.alt = this._title;
    popupTitle.textContent = this._title;

    showPopup(popupBigPicture);
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleCardRemove();
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._openPopupBigPicture();
    });
  }

  generateCard() {
    this._element = this._getTemplate();

    const _picture = this._element.querySelector('.card__image');
    _picture.src = this._image;
    _picture.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;
    
    this._setEventListeners();

    return this._element;

  }
}

