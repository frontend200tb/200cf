/************************
Функция pageLink вешает обработчик клика на элементы asideMenu
************************/
import {pages}   from './data-pages';
import in1       from '../p100/elem-1-Round1';
import in2       from '../p100/elem-2-Round2';
import in3       from '../p100/elem-3-Round3';
import in4       from '../p100/elem-4-Round4';
import in5       from '../p100/elem-5-Round5';
import in6       from '../p100/elem-6-Round6';
import in7       from '../p100/elem-7-Round7';
import in8       from '../p100/elem-8-Round8';
import in9       from '../p100/elem-9-Round9';
import in10      from '../p100/elem-10-Round10';
import in11      from '../p100/elem-11-Round11';
import in12      from '../p100/elem-12-Round12';
import in13      from '../p100/elem-13-Round13';
import in14      from '../p100/elem-14-Round14';
import in15      from '../p100/elem-15-Round15';
import in16      from '../p100/elem-16-Round16';
import in17      from '../p100/elem-17-Round17';
import in18      from '../p100/elem-18-Round18';
import in19      from '../p100/elem-19-Round19';
import in20      from '../p100/elem-20-Round20';
import in21      from '../p100/elem-21-Round21';
import in22      from '../p100/elem-22-Round22';
import in23      from '../p100/elem-23-Round23';
import in24      from '../p100/elem-24-Round24';
import in25      from '../p100/elem-25-Round25';
import in26      from '../p100/elem-26-Round26';
import in27      from '../p100/elem-27-Round27';
import in28      from '../p100/elem-28-Round28';
import in29      from '../p100/elem-29-Round29';
import in30      from '../p100/elem-30-Round30';
import in31      from '../p100/elem-31-Round31';
import in32      from '../p100/elem-32-Round32';
import in33      from '../p100/elem-33-Round33';
import in34      from '../p100/elem-34-Round34';
import in35      from '../p100/elem-35-Round35';
import in36      from '../p100/elem-36-Round36';
import in37      from '../p100/elem-37-Round37';
import in38      from '../p100/elem-38-sio1';
import in39      from '../p100/elem-39-sko1';
import in40      from '../p100/elem-40-Round39';
import in41      from '../p100/elem-41-Round40';
import in42      from '../p100/elem-42-Round41';
import in43      from '../p100/elem-43-Round42';
import in44      from '../p100/elem-44-sko2';
import in45      from '../p100/elem-45-sko3';
import in46      from '../p100/elem-46-sio2';
import in47      from '../p100/elem-47-Round44';
import in48      from '../p100/elem-48-sio3';
import in49      from '../p100/elem-49-Round46';
import in50      from '../p100/elem-50-Round47';
import in51      from '../p100/elem-51-Round48';

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
            case 21: in21(); break;
            case 22: in22(); break;
            case 23: in23(); break;
            case 24: in24(); break;
            case 25: in25(); break;
            case 26: in26(); break;
            case 27: in27(); break;
            case 28: in28(); break;
            case 29: in29(); break;
            case 30: in30(); break;
            case 31: in31(); break;
            case 32: in32(); break;
            case 33: in33(); break;
            case 34: in34(); break;
            case 35: in35(); break;
            case 36: in36(); break;
            case 37: in37(); break;
            case 38: in38(); break;
            case 39: in39(); break;
            case 40: in40(); break;
            case 41: in41(); break;
            case 42: in42(); break;
            case 43: in43(); break;
            case 44: in44(); break;
            case 45: in45(); break;
            case 46: in46(); break;
            case 47: in47(); break;
            case 48: in48(); break;
            case 49: in49(); break;
            case 50: in50(); break;
            case 51: in51(); break;
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
