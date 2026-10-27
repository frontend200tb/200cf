import a from '../../rounds/rounds100/z100/z50a.html';
import d from '../../rounds/rounds100/z100/z1a.html';

export default function inElem() {
  if (document.querySelector('.t1')) {
    document.querySelector('.t1').innerHTML = a;
  }
  if (document.querySelector('.t4')) {
    document.querySelector('.t4').innerHTML = d;
  }
}
