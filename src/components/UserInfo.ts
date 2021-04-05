export default class UserInfo {
  private _name: HTMLElement;
  private _about: HTMLElement;
  constructor(nameSelector: string, aboutSelector: string) {
    this._name = document.querySelector(nameSelector) as HTMLElement;
    this._about = document.querySelector(aboutSelector) as HTMLElement;
  }

  getUserInfo() {
    const name: string =  this._name.textContent as string;
    const about: string = this._about.textContent as string;
    const { name, about } = data;
    return data;
  }

  setUserInfo(values) {
    this._name.textContent = values.name;
    this._about.textContent = values.about;
  }
}