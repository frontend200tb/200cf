import a from '../z100/z94a.html';
import b from '../z100/z94b.html';
import c from '../z100/z93a.html'; // div1
import d from '../z100/z93b.html'; // div1
import e from '../z100/z93c.html'; // div1

export default function inElem() {
  if (document.querySelector('.t1')) {
    document.querySelector('.t1').innerHTML = a;
  }
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
