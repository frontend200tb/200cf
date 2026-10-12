/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import { pages } from './data-pages';
import in313 from '../p400/elem-313-Round186';
import in318 from '../p400/elem-318-Round188';
import in339 from '../p400/elem-339-Round197';
import in381 from '../p400/elem-381-Round223';

export default function pageLink(asideItems, currentContent) {
  asideItems.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();

      if (pages[index]) {
        if (pages[index].length === 2) {
          // если задачи берутся из базы
          // подключаем страницу
          currentContent.innerHTML = pages[index][0];

          // подключаем задачи на страницу из базы
          switch (pages[index][1]) {
            case 313: in313(); break;
            case 318: in318(); break;
            case 339: in339(); break;
            case 381: in381(); break;
            default: break;
          }
        } else {
          // если задачи на странице
          // подключаем только страницу
          currentContent.innerHTML = pages[index];
        }
      }
    });
  });
}
