import showRounds100 from './rounds100/rounds100';
import showRounds200 from './rounds200/rounds200';
import showRounds    from './rounds/rounds';

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
    url: 'rounds.html',
    text: 'Rounds',
    content: '<rounds-rounds></rounds-rounds>',
    act() {
      showRounds();
    },
  },
];
