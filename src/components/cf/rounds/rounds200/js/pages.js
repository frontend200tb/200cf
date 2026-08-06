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
import in120     from '../p200/elem-120-kosSaratov';
import in131     from '../p200/elem-131-Round95';
import in134     from '../p200/elem-134-TRound3';
import in136     from '../p200/elem-136-Round97';
import in141     from '../p200/elem-141-Round101';
import in155     from '../p200/elem-155-Round109';
import in158     from '../p200/elem-158-vk-q1';
import in159     from '../p200/elem-159-vk-q2';
import in163     from '../p200/elem-163-vk-r2';
import in169     from '../p200/elem-169-vk-r2';
import in200     from '../p200/elem-200-Round126';

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
            case 120: in120(); break;
            case 131: in131(); break;
            case 134: in134(); break;
            case 136: in136(); break;
            case 141: in141(); break;
            case 155: in155(); break;
            case 158: in158(); break;
            case 159: in159(); break;
            case 163: in163(); break;
            case 169: in169(); break;
            case 200: in200(); break;
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
