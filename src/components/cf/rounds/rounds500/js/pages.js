/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import { pages } from './data-pages';
import in427 from '../p500/elem-427-Round244';
import in467 from '../p500/elem-467-Round267';
import in469 from '../p500/elem-469-Round268';
import in490 from '../p500/elem-490-Round279';

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
            case 427: in427(); break;
            case 467: in467(); break;
            case 469: in469(); break;
            case 490: in490(); break;
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
