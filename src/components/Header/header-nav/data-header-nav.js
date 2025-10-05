import showCf from '../../cf/rounds/rounds';

const dataHeaderNav = [
  {
    url: '/cf.html',
    text: 'codeforces',
    content: '<cf-rounds></cf-rounds>',
    act() {
      showCf();
    },
  },
];

export default dataHeaderNav;
