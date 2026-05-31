import showRounds100  from './rounds100/rounds100';

export const dataRoundsNav = [
  {
    url: 'rounds100.html',
    text: 'Rounds 100',
    content: '<rounds-100></rounds-100>',
    act() {
      showRounds100();
    },
  },
];
