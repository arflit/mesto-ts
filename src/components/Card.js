export default class Card {

  constructor (placeTitle, placeImage, cardSelector, { handleCardClick } ) {
    this._title = placeTitle;
    this._image = placeImage;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.card__trash-button').addEventListener('click', () => {
      this._handleCardRemove();
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick(this._image, this._title);
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

