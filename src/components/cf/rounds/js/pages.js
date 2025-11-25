/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages}   from './data-pages';
import in1       from '../pages/elem-1-Round1';
import in2       from '../pages/elem-2-Round2';
import in3       from '../pages/elem-3-Round3';
import in4       from '../pages/elem-4-Round4';
import in5       from '../pages/elem-5-Round5';
import in6       from '../pages/elem-6-Round6';
import in7       from '../pages/elem-7-Round7';
import in8       from '../pages/elem-8-Round8';
import in9       from '../pages/elem-9-Round9';
import in10      from '../pages/elem-10-Round10';
import in11      from '../pages/elem-11-Round11';
import in12      from '../pages/elem-12-Round12';
import in13      from '../pages/elem-13-Round13';
import in14      from '../pages/elem-14-Round14';
import in15      from '../pages/elem-15-Round15';
import in34      from '../pages/elem-34-Round34';
import in38      from '../pages/elem-38-sio1';
import in134     from '../pages/elem-134-TRound3';
import in230     from '../pages/elem-230-Round142';
import in313     from '../pages/elem-313-Round186';

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
            case 1:  in1(); break;
            case 2:  in2(); break;
            case 3:  in3(); break;
            case 4:  in4(); break;
            case 5:  in5(); break;
            case 6:  in6(); break;
            case 7:  in7(); break;
            case 8:  in8(); break;
            case 9:  in9(); break;
            case 10: in10(); break;
            case 11: in11(); break;
            case 12: in12(); break;
            case 13: in13(); break;
            case 14: in14(); break;
            case 15: in15(); break;
            case 34: in34(); break;
            case 38: in38(); break;
            case 134: in134(); break;
            case 230: in230(); break;
            case 313: in313(); break;
          }
        } else {
          // если задачи на странице
          // подключаем только страницу
          currentContent.innerHTML = pages[index];
        }
      }
    });
  })
}
