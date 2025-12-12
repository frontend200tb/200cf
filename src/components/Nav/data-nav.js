import showRounds      from '../cf/rounds/rounds';
import showEdu         from '../cf/edu/edu';
import showYargu1      from '../cf/yargu1/yargu1';
import showYargu2      from '../cf/yargu2/yargu2';
import showYargu3      from '../cf/yargu3/yargu3';
import showMirea       from '../cf/mirea/mirea';
import showSch19       from '../cf/sch19/sch19';
import showSpbgu       from '../cf/spbgu/spbgu';
import showTulgu       from '../cf/tulgu/tulgu';
import showAll         from '../cf/all/all';

export const dataNavCf = [
  {
    url: 'rounds.html',
    text: 'Rounds',
    content: '<cf-rounds></cf-rounds>',
    act() {
      showRounds();
    },
  },
  {
    url: 'edu.html',
    text: 'Edu',
    content: '<cf-edu></cf-edu>',
    act() {
      showEdu();
    },
  },
  {
    url: 'yargu1.html',
    text: 'ЯрГУ1',
    content: '<cf-yargu1></cf-yargu1>',
    act() {
      showYargu1();
    },
  },
  {
    url: 'yargu2.html',
    text: 'ЯрГУ2',
    content: '<cf-yargu2></cf-yargu2>',
    act() {
      showYargu2();
    },
  },
  {
    url: 'yargu3.html',
    text: 'ЯрГУ3',
    content: '<cf-yargu3></cf-yargu3>',
    act() {
      showYargu3();
    },
  },
  {
    url: 'mirea.html',
    text: 'МИРЭА',
    content: '<cf-mirea></cf-mirea>',
    act() {
      showMirea();
    },
  },
  {
    url: 'sch19.html',
    text: 'SCH19_1',
    content: '<cf-sch19></cf-sch19>',
    act() {
      showSch19();
    },
  },
  {
    url: 'spbgu.html',
    text: 'СПбГУ',
    content: '<cf-spbgu></cf-spbgu>',
    act() {
      showSpbgu();
    },
  },
  {
    url: 'tulgu.html',
    text: 'ТулГУ',
    content: '<cf-tulgu></cf-tulgu>',
    act() {
      showTulgu();
    },
  },
  {
    url: 'all.html',
    text: 'Все',
    content: '<cf-all></cf-all>',
    act() {
      showAll();
    },
  },
];
