import b from '../../rounds/rounds100/z100/z4a.html';
import c from '../../rounds/rounds100/z100/z12a.html';
import d from '../../rounds/rounds100/z100/z12b.html';
import e from '../../rounds/rounds100/z100/z52a.html';

export default function inElem() {
  if (document.querySelector('.t2')) {
    document.querySelector('.t2').innerHTML = b;
  }
  if (document.querySelector('.t3')) {
    document.querySelector('.t3').innerHTML = c;
  }
  if (document.querySelector('.t4')) {
    document.querySelector('.t4').innerHTML = d;
  }
  if (document.querySelector('.t5')) {
    document.querySelector('.t5').innerHTML = e;
  }
}
