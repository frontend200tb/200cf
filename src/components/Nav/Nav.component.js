/** **************
Скрипт из файла nav.js
создает ссылки в меню nav для каждого пункта меню header_nav
Cf      Rounds ЯрГУ1 ЯрГУ2 ЯрГУ3 МИРЭА SCH19_1 СПбГУ Все
****************** */

import './Nav.class';
import {dataNavCf} from './data-nav';
import { endUrl } from '../Header/header-nav/header-nav';

const nav = document.getElementById('nav');
const main = document.getElementById('maincomponent');

/** **************
1. nav для страниц cf
**************** */

// 1.1 Создаем ссылки из массива dataNavCf
createNavCf(dataNavCf);

function createNavCf(navCode) {
  navCode.forEach((el) => {
    el.elem = document.createElement('a');
    el.elem.href = '';
    el.elem.innerHTML = el.text;
    el.elem.addEventListener('click', (event) => {
      event.preventDefault();
      // добавим class="active"
      classActive(navCode, el.elem);
      main.innerHTML = el.content;
      el.act();
    });
  });
}

// Ставим class="active" выбранному элементу меню и убираем с остальных
function classActive(menu, activElem) {
  menu.forEach((el) => {
    el.elem.classList.remove('active');
  });
  activElem.classList.add('active');
}

export default function createNav() {
  // 1.2 Добавим ссылки navCf в nav если адрес cf.html
  if (endUrl === '/cf.html') {
    nav.innerHTML = '';
    dataNavCf.forEach((el) => {
      nav.appendChild(el.elem);
      el.elem.classList.remove('active');
    });
    dataNavCf[0].elem.classList.add('active');
  }
}
