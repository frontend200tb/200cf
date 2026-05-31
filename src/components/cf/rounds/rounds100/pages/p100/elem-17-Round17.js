import a    from '../../z/z100/z17a.html';
import b    from '../../z/z100/z17b.html';
import c    from '../../z/z100/z17c.html';
import d    from '../../z/z100/z17d.html';
import e    from '../../z/z100/z17e.html';

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
