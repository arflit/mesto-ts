export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const data = {};
    data.name = this._name.textContent;
    data.about = this._about.textContent;
    return data;
  }

  setUserInfo(values) {
    this._name.textContent = values.name;
    this._about.textContent = values.about;
  }
}