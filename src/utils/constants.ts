//Попапы
export const popupProfileSelector: string  = '#popup-profile';
export const popupAddCardSelector: string  = '#popup-addcard';
export const popupWithImageSelector: string  = '#popup-bigpicture';
export const popupWithImagePictureSelector: string  = '.popup__picture';
export const popupWithImageTitleSelector: string  = '.popup__pic-title';
export const popupAvatarSelector: string  = '#popup-avatar';
export const popupDeleteCardSelector: string  = "#popup-delete-card";
//Кнопки вызова
export const editButton: HTMLElement = document.querySelector('.profile__edit-button') as HTMLElement;
export const newPlaceButton: HTMLElement = document.querySelector('.profile__add-button') as HTMLElement;
//Формы 
export const profileForm = document.forms.editform;
export const newCardForm = document.forms.addcardform;
export const avatarForm = document.forms.avatarform;
//Содержимое страницы 
export const avatarSelector: string  = '.profile__avatar';
export const avatarEditButtonSelector: string  = '.profile__avatar-edit-button';
export const avatarButtonVisible: string  = 'profile__avatar-edit-button_visible';
export const nameSelector: string  = '.profile__name';
export const aboutSelector: string  = '.profile__about';
//Добавление карточек
export const cardsListSelector: string  = '.cards__list';
export const cardTemplateSelector: string  = '.tempcard';
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit-button',
  inactiveButtonClass: 'popup__form-submit-button_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-error_visible'
}
//Api
export const apiBaseUrl: string  = 'https://mesto.nomoreparties.co/v1/cohort-19';
export const apiAutorizationToken: string  = '0ea9232f-20d8-4231-b26e-2828aaef49f5'
//Звери
type Animal = {link: string, name: string}
export const animals: Animal[] = [
  {
    link: 'https://cdn.sm-news.ru/wp-content/uploads/2020/06/17/s1200-4-1.jpg',
    name: 'Лошадка'
  },  {
    link: 'https://foto-cats.ru/wp-content/uploads/d/7/8/d78c9dc7b72dd97260afbb2228ffc4cc.jpg',
    name: 'Манул'
  },  {
    link: 'https://setaim.ru/wp-content/uploads/7-452.jpg',
    name: 'Котэ'
  },  {
    link: 'http://www.chukotka-priroda.ru/tinybrowser/fulls/images/zveri/2019/01/rys.jpg',
    name: 'Рысь'
  },  {
    link: 'https://pandda.online/wp-content/uploads/2018/01/89efaad58b4cd787a73e8b2fc5ea375b-768x960.jpg',
    name: 'Домашний Рысь'
  },  {
    link: 'https://i.ucrazy.ru/files/i/2007.11.15/1195136714_watchful_eyes_bengal_tiger.jpg',
    name: 'Тигр'
  },  {
    link: 'https://proprikol.ru/wp-content/uploads/2020/08/kartinki-krysy-14.jpg  ',
    name: 'Крыса'
  },  {
    link: 'https://lorises.ru/wp-content/uploads/kupayut-li-homyakov_4.jpg',
    name: 'Хомячок'
  },  {
    link: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk0Mq51rUiHD61-GdDmF_kl6aKTM5SRkZCeTgDn6uOyic',
    name: 'Жираф'
  },  {
    link: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkD8X_0WSVqNEhQ0jt77dQl6aKTM5SRkZCeTgDn6uOyic',
    name: 'Лось'
  },  {
    link: 'https://i.pinimg.com/736x/51/bf/81/51bf813b1170ddfae1bc9324ce546e3b.jpg',
    name: 'Касатка'
  },  {
    link: 'https://www.kiro7.com/resizer/3lhTMmTJZIJh0PXBDuHEag6--Ds=/1200x628/arc-anglerfish-arc2-prod-cmg.s3.amazonaws.com/public/3EVMYW53KWIGCGKHEU3UMGX6BA.jpg',
    name: 'Бегемот'
  },  {
    link: 'https://avatars.mds.yandex.net/get-pdb/986482/93fe3a89-faa9-423d-a588-e252dcc360f1/s600',
    name: 'Бонобо'
  },  {
    link: 'https://vsezhivoe.ru/wp-content/uploads/2017/09/20.jpg',
    name: 'Волк'
  },  {
    link: 'https://hypecrib.com/wp-content/uploads/2019/12/6-1.jpg',
    name: 'Овчарка'
  },  {
    link: 'https://loveopium.ru/content/2015/01/fox/01s.jpg',
    name: 'Лиса'
  },  {
    link: 'https://www.primeugandasafaris.com/wp-content/uploads/Katonga-Wildlife-Reserve.jpg',
    name: 'Антилопа'
  },  {
    link: 'https://grandgames.net/puzzle/source/koali_na_vetke.jpg',
    name: 'Коала'
  },  {
    link: 'https://nashzelenyimir.ru/wp-content/uploads/2016/08/Как-выглядит-крокодил-фото-1024x640.jpg',
    name: 'Крокодил'
  },  {
    link: 'https://i.pinimg.com/originals/1d/07/6d/1d076d655c23e0d250b82c4d1f60c6af.jpg',
    name: 'Нутрия'
  },  {
    link: 'https://avatars.mds.yandex.net/get-zen_doc/1645803/pub_5df6751d5fd55f00ada576b6_5e4ea2aab7ff5817661e2cee/scale_1200',
    name: 'Бобёр'
  },  {
    link: 'https://funik.ru/wp-content/uploads/2018/12/81d173a961df58b1b10b.jpg',
    name: 'Дельфин'
  },  {
    link: 'https://avatars.mds.yandex.net/get-zen_doc/1900274/pub_5d79304492414d00ad2a88a7_5d7931e074f1bc00ace80501/scale_1200',
    name: 'Кит'
  },  {
    link: 'https://zeleniymir.org/wp-content/uploads/2019/04/Olen-50-1-679x1024.jpg',
    name: 'Олень'
  },  {
    link: 'https://top10a.ru/wp-content/uploads/2020/01/6-105.jpg',
    name: 'Песец'
  },  {
    link: 'https://img4.goodfon.ru/wallpaper/nbig/5/83/surikaty-priroda-fon-2.jpg',
    name: 'Суррикат'
  },  {
    link: 'https://avatars.mds.yandex.net/get-zen_doc/198002/pub_5cf4f98ed6b38500b0dbd532_5cf4fe31a1d81200af09f23d/scale_1200',
    name: 'Вомбат'
  },  {
    link: 'http://mtdata.ru/u5/photo8E9E/20624657690-0/original.jpg',
    name: 'Медведь'
  },  {
    link: 'https://mirzhivotnye.ru/wp-content/uploads/2018/08/Suslik-82.jpg',
    name: 'Суслик'
  },  {
    link: 'https://cdn-tn.fishki.net/20/preview/3396351.jpg',
    name: 'Утконос'
  }

]