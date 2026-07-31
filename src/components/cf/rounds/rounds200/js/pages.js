/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import { pages }   from './data-pages';
import in104     from '../p200/elem-104-Round80';
import in106     from '../p200/elem-106-Round82';
import in110     from '../p200/elem-110-Round84';
import in112     from '../p200/elem-112-Round85';
import in116     from '../p200/elem-116-Round87';
import in118     from '../p200/elem-118-Round89';
import in134     from '../p200/elem-134-TRound3';

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
            case 104: in104(); break;
            case 106: in106(); break;
            case 110: in110(); break;
            case 112: in112(); break;
            case 116: in116(); break;
            case 118: in118(); break;
            case 134: in134(); break;
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
