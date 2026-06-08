/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages}   from './data-pages';
import in134     from '../pages/p200/elem-134-TRound3';
import in230     from '../pages/elem-230-Round142';
import in313     from '../pages/elem-313-Round186';
import in381     from '../pages/elem-381-Round223';
import in520     from '../pages/elem-520-Round295';
import in580     from '../pages/elem-580-Round321';
import in1030    from '../pages/elem-1030-Techno2019o1';
import in1352    from '../pages/elem-1352-Round640';

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
            case 134: in134(); break;
            case 230: in230(); break;
            case 313: in313(); break;
            case 381: in381(); break;
            case 520: in520(); break;
            case 580: in580(); break;
            case 1030: in1030(); break;
            case 1352: in1352(); break;
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
