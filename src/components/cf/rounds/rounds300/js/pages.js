/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import { pages } from './data-pages';
import in228 from '../p300/elem-228-Round141';
import in230 from '../p300/elem-230-Round142';
import in268 from '../p300/elem-268-Round164';
import in278 from '../p300/elem-278-Round170';

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
            case 228: in228(); break;
            case 230: in230(); break;
            case 268: in268(); break;
            case 278: in278(); break;
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
