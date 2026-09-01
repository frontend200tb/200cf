import a    from '../z200/z104a.html';
import b    from '../z200/z103a.html'; // div1
import c    from '../z200/z103b.html'; // div1
import d    from '../z200/z103c.html'; // div1
import e    from '../z200/z103d.html'; // div1

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
