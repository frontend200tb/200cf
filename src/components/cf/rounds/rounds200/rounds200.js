/** *******************
Скрипт из файла rounds200.js
Объект rounds содержит страницу rounds200
Функция showRounds200 показывает страницу rounds200
******************** */
import './js/element-rounds200';
import { createAside, createMain } from './js/f-create-aside';

// 1. Создаем объект rounds200
const rounds200 = {};

// 2. В объекте rounds создаем свойство aside
rounds200.aside = createAside();

// 3. В объекте rounds создаем свойство main
rounds200.main = createMain();

// 4. Экспортируем функцию showRounds200()
export default function showRounds200() {
  const mainAside = document.querySelector('.main__aside');

  if (mainAside) {
    mainAside.innerHTML = '';
    mainAside.append(rounds200.aside);
    mainAside.append(rounds200.main);

    // 5. Создадим и вызовем событие click на первой ссылке aside элемента
    const eventClick = new Event('click');
    mainAside.firstElementChild.firstElementChild.dispatchEvent(eventClick);
  }
}
