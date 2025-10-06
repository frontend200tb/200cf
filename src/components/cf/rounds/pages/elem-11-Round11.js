import a    from '../../el-cf/el-cf11a.html';
import b    from '../../el-cf/el-cf11b.html';
import c    from '../../el-cf/el-cf11c.html';
import d    from '../../el-cf/el-cf11d.html';
import e    from '../../el-cf/el-cf11e.html';

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
