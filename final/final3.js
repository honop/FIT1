function money(){
  var n = Number(document.getElementById('ofuse').value);
  if (n < 100) {
    alert('それじゃあ全然足りないよ！');
  }
   else {
    document.getElementById('a').innerHTML = '<a href="finalend3ae.html"><input type="button" value="教祖様「よろしい。その金でそなたにお祓いをしてやろう。」"></a>';
  }
}


function money1(){
  var n = Number(document.getElementById('ofuse1').value);
  if (n < 100) {
    alert('それじゃあ全然足りないよ！');
  }
   else {
    document.getElementById('b').innerHTML = '<a href="finalend3be.html"><input type="button" value="教祖様「よろしい。その金でそなたにお祓いをしてやろう。」"></a>';
  }
}
