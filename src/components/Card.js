export default class Card {

  constructor (myID, data, cardSelector, { handleCardClick, handleCardRemove, handleLikeClick } ) {
    this._myID = myID;
    this._data = data;
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  getCardID() {
    return this._data._id;
  }

  _isLikedByMe(data) {
    return data.likes.some(element => {
      return element._id === this._myID;
    });
  }

  isMy() {
    return (this._data.owner._id === this._myID);
  }

  refreshLikes(data) {
    if (this._isLikedByMe(data)) {
      this.liked = true;
      this._enableLike();
    }
    else {
      this.liked = false;
      this._disableLike();
    }
    this._likeCounter = data.likes.length;
    this._element.querySelector('.card__like-number').textContent = this._likeCounter;
  }

  _enableLike() {
    this._like.classList.add('card__like_active');
  }

  _disableLike() {
    if (this._like.classList.contains('card__like_active')) {this._like.classList.remove('card__like_active');}
  }

  handleCardRemove() {
    this._element.remove();
  }

  addCard(thisContainer, card) {
    thisContainer.container.prepend(card);
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      this._handleLikeClick(evt);
    });
    if (this.isMy()) {
      this._element.querySelector('.card__trash-button').addEventListener('click', (evt) => {
        this._handleCardRemove(evt.target.closest('.card'));
      });
 
    }
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick(this._image, this._title);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.card__like');
    const _picture = this._element.querySelector('.card__image');
    _picture.src = this._image;
    _picture.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;
    
    if (this.isMy()) {
      this._element.querySelector('.card__trash-button').classList.remove('card__trash-button_hidden');
    }
    this.refreshLikes(this._data);
    this._setEventListeners();

    return this._element;
  }
}

