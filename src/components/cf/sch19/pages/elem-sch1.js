import b from '../../rounds/z/z100/z4a.html';
import c from '../../rounds/z/z100/z12a.html';
import d from '../../rounds/z/z100/z12b.html';

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
}
