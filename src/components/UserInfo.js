export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const job = this._job.textContent;
    return { name, job };
  }

  setUserInfo(values) {
    this._name.textContent = values.name;
    this._job.textContent = values.job;
  }
}