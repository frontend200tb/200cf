import a from '../../rounds/rounds100/z100/z4a.html';
import f from '../../rounds/rounds100/z100/z59a.html';

export default function inElem() {
  if (document.querySelector('.t1')) {
    document.querySelector('.t1').innerHTML = a;
  }
  if (document.querySelector('.t6')) {
    document.querySelector('.t6').innerHTML = f;
  }
}
