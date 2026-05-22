import i    from '../../rounds/z/z100/z16b.html';
import p    from '../../rounds/z/z134b.html';

export default function inElem() {

  if (document.querySelector('.t9')) {
    document.querySelector('.t9').innerHTML = i;
  }
  if (document.querySelector('.t16')) {
    document.querySelector('.t16').innerHTML = p;
  }

}
