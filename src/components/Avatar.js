export default class Avatar {
  constructor(avatarSelector, avatarEditButtonSelector, avatarButtonVisible, { handleEditButton }) {
    this._avatar = document.querySelector(avatarSelector);
    this._avatarEditIcon = document.querySelector(avatarEditButtonSelector);
    this._handleEditButton = handleEditButton;
    this._avatarButtonVisible = avatarButtonVisible;
    this._showEditIcon = () => {
      this._avatarEditIcon.classList.add(this._avatarButtonVisible);
    }
    this._hideEditIcon = (evt) => {
      this._avatarEditIcon.classList.remove(this._avatarButtonVisible);
    }
  }

  enableEditButton() {
    this._avatar.addEventListener('mouseover', this._showEditIcon);
    this._avatarEditIcon.addEventListener('mouseout', this._hideEditIcon);
    this._avatarEditIcon.addEventListener('click', this._handleEditButton);
  }

  setNewAvatar(values) {
    return new Promise((resolve, reject) => {
      this._avatar.src = values.avatar;
      this._avatar.onerror = reject;
      this._avatar.onload = resolve;
    });
  }

}