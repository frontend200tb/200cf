import showRounds100 from './rounds100/rounds100';
import showRounds200 from './rounds200/rounds200';
import showRounds300 from './rounds300/rounds300';

export const dataRoundsNav = [
  {
    url: 'rounds100.html',
    text: 'Rounds 100',
    content: '<rounds-100></rounds-100>',
    act() {
      showRounds100();
    },
  },
  {
    url: 'rounds200.html',
    text: 'Rounds 200',
    content: '<rounds-200></rounds-200>',
    act() {
      showRounds200();
    },
  },
  {
    url: 'rounds300.html',
    text: 'Rounds 300',
    content: '<rounds-300></rounds-300>',
    act() {
      showRounds300();
    },
  },
];
