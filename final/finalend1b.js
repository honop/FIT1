function knock(){
  var x = document.getElementById('a').innerHTML;
  if (x.length < 30) {
    x = x + 'コン！';
    document.getElementById('a').innerHTML = x;
  } else {
    alert('開いた');
    document.getElementById('b').innerHTML = '<a href="finalend1ac.html"><input type="button" value="ドアの先に行ってみる"></a>';
  }
}

function knock1(){
  var x = document.getElementById('c').innerHTML;
  if (x.length < 30) {
    x = x + 'コン！';
    document.getElementById('c').innerHTML = x;
  } else {
    alert('開いた');
    document.getElementById('d').innerHTML = '<a href="finalend1bc.html"><input type="button" value="ドアの先に行ってみる"></a>';
  }
}
