/****************
Скрипт из файла edu.js
Объект edu содержит страницу edu
Функция showEdu показывает страницу edu
*****************/
import './js/element-edu';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект edu
const edu = {};

// 2. В объекте edu создаем свойство aside
edu.aside = createAside();

// 3. В объекте edu создаем свойство main
edu.main = createMain();

// 4. Экспортируем функцию showEdu()
export default function showEdu() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(edu.aside);
    mainAside.append(edu.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
