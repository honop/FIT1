var w = 10;

function action1start() {
  document.getElementById('a').innerHTML = '<img src="door_close.png" width="10">';
  document.getElementById('b').innerHTML = '';
  setTimeout('action1resize()', 40);
}

function action1resize() {
  if (w <= 269) {
    w = w + 20;
    document.getElementById('a').innerHTML = '<img src="door_close.png" width="' + w + '">';
    setTimeout('action1resize()', 30);
  } else {
      document.getElementById('b').innerHTML = '<p>あ！「どこでもドア」だ！これを使えば早くSFCに辿り着けるかも！</p><a href="finalend1ab.html"><input type="button" value="ドアを叩いてみる"></a>';
  }
}




var x = 10;

function action_1start() {
  document.getElementById('c').innerHTML = '<img src="door_close.png" width="10">';
  document.getElementById('d').innerHTML = '';
  setTimeout('action_1resize()', 40);
}

function action_1resize() {
  if (x <= 269) {
    x = x + 20;
    document.getElementById('c').innerHTML = '<img src="door_close.png" width="' + x + '">';
    setTimeout('action_1resize()', 30);
  } else {
      document.getElementById('d').innerHTML = '<p>あ！「どこでもドア」だ！これを使えば早くSFCに辿り着けるかも！</p><a href="finalend1bb.html"><input type="button" value="ドアを叩いてみる"></a>';
  }
}
