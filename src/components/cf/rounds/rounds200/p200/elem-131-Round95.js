import a    from '../z200/z131a.html';
import b    from '../z200/z131b.html';
import c    from '../z200/z131c.html';
import d    from '../z200/z131d.html';
import e    from '../z200/z131e.html';
import f    from '../z200/z131f.html';

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
  if (document.querySelector('.t6')) {
    document.querySelector('.t6').innerHTML = f;
  }
}
