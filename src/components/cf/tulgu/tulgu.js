/****************
Скрипт из файла tulgu.js
Объект tulgu содержит страницу tulgu
Функция showTulgu показывает страницу tulgu
*****************/
import './js/element-tulgu';
import {createAside, createMain} from './js/f-create-aside';

// 1. Создаем объект tulgu
const tulgu = {};

// 2. В объекте tulgu создаем свойство aside
tulgu.aside = createAside();

// 3. В объекте tulgu создаем свойство main
tulgu.main = createMain();

// 4. Экспортируем функцию showTulgu()
export default function showTulgu() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(tulgu.aside);
    mainAside.append(tulgu.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
