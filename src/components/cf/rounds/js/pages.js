/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages}   from './data-pages';
import in1       from '../pages/p100/elem-1-Round1';
import in2       from '../pages/p100/elem-2-Round2';
import in3       from '../pages/p100/elem-3-Round3';
import in4       from '../pages/p100/elem-4-Round4';
import in5       from '../pages/p100/elem-5-Round5';
import in6       from '../pages/p100/elem-6-Round6';
import in7       from '../pages/p100/elem-7-Round7';
import in8       from '../pages/p100/elem-8-Round8';
import in9       from '../pages/p100/elem-9-Round9';
import in10      from '../pages/p100/elem-10-Round10';
import in11      from '../pages/p100/elem-11-Round11';
import in12      from '../pages/p100/elem-12-Round12';
import in13      from '../pages/p100/elem-13-Round13';
import in14      from '../pages/p100/elem-14-Round14';
import in15      from '../pages/p100/elem-15-Round15';
import in16      from '../pages/p100/elem-16-Round16';
import in17      from '../pages/p100/elem-17-Round17';
import in18      from '../pages/p100/elem-18-Round18';
import in19      from '../pages/p100/elem-19-Round19';
import in20      from '../pages/p100/elem-20-Round20';
import in34      from '../pages/p100/elem-34-Round34';
import in38      from '../pages/p100/elem-38-sio1';
import in39      from '../pages/p100/elem-39-sko1';
import in44      from '../pages/p100/elem-44-sko2';
import in45      from '../pages/p100/elem-45-sko3';
import in134     from '../pages/elem-134-TRound3';
import in230     from '../pages/elem-230-Round142';
import in313     from '../pages/elem-313-Round186';
import in381     from '../pages/elem-381-Round223';
import in520     from '../pages/elem-520-Round295';
import in580     from '../pages/elem-580-Round321';

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
            case 16: in16(); break;
            case 17: in17(); break;
            case 18: in18(); break;
            case 19: in19(); break;
            case 20: in20(); break;
            case 34: in34(); break;
            case 38: in38(); break;
            case 39: in39(); break;
            case 44: in44(); break;
            case 45: in45(); break;
            case 134: in134(); break;
            case 230: in230(); break;
            case 313: in313(); break;
            case 381: in381(); break;
            case 520: in520(); break;
            case 580: in580(); break;
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
