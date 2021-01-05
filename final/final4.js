function go2(){
   var acheck1 = document.getElementById('a1').checked;
   var acheck2 = document.getElementById('a2').checked;
   var bcheck1 = document.getElementById('b1').checked;
   var bcheck2 = document.getElementById('b2').checked;
   var ccheck1 = document.getElementById('c1').checked;
   var ccheck2 = document.getElementById('c2').checked;
   var dcheck1 = document.getElementById('d1').checked;
   var dcheck2 = document.getElementById('d2').checked;
   var echeck1 = document.getElementById('e1').checked;
   var echeck2 = document.getElementById('e2').checked;

  if (acheck1 && bcheck1 && ccheck1 && dcheck1 && echeck1) {
    location.href = 'final12result1.html';
  } else if (acheck1 && bcheck1 && ccheck1 && dcheck1 && echeck2) {
    location.href = 'final12result1.html';
  } else if (acheck1 && bcheck1 && ccheck1 && dcheck2 && echeck1) {
    location.href = 'final12result2.html';
  } else if (acheck1 && bcheck1 && ccheck2 && dcheck2 && echeck2) {
    location.href = 'final12result2.html';
  } else if (acheck1 && bcheck1 && ccheck2 && dcheck1 && echeck1) {
    location.href = 'final12result2.html';
  } else if (acheck1 && bcheck1 && ccheck2 && dcheck1 && echeck2) {
    location.href = "final12result1.html";
  } else if (acheck1 && bcheck1 && ccheck2 && dcheck2 && echeck1) {
    location.href = "final12result2.html";
  } else if (acheck1 && bcheck1 && ccheck2 && dcheck2 && echeck2) {
    location.href = "final12result2.html";

  } else if (acheck1 && bcheck2 && ccheck1 && dcheck1 && echeck1) {
    location.href = "final12result1.html";
  } else if (acheck1 && bcheck2 && ccheck1 && dcheck1 && echeck2) {
    location.href = "final12result3.html";
  } else if (acheck1 && bcheck2 && ccheck1 && dcheck2 && echeck1) {
    location.href = "final12result1.html";
  } else if (acheck1 && bcheck2 && ccheck1 && dcheck2 && echeck2) {
    location.href = "final12result1.html";
  } else if (acheck1 && bcheck2 && ccheck2 && dcheck1 && echeck1) {
    location.href = "final12result1.html";
  } else if (acheck1 && bcheck2 && ccheck2 && dcheck1 && echeck2) {
    location.href = "final12result1.html";
  } else if (acheck1 && bcheck2 && ccheck2 && dcheck2 && echeck1) {
    location.href = "final12result2.html";
  } else if (acheck1 && bcheck2 && ccheck2 && dcheck2 && echeck2) {
    location.href = "final12result1.html";

  } else if (acheck2 && bcheck1 && ccheck1 && dcheck1 && echeck1) {
    location.href = "final12result1.html";
  } else if (acheck2 && bcheck1 && ccheck1 && dcheck1 && echeck2) {
    location.href = "final12result3.html";
  } else if (acheck2 && bcheck1 && ccheck1 && dcheck2 && echeck1) {
    location.href = "final12result1.html";
  } else if (acheck2 && bcheck1 && ccheck1 && dcheck2 && echeck2) {
    location.href = "final12result1.html";
  } else if (acheck2 && bcheck1 && ccheck2 && dcheck1 && echeck1) {
    location.href = "final12result1.html";
  } else if (acheck2 && bcheck1 && ccheck2 && dcheck1 && echeck2) {
    location.href = "final12result1.html";
  } else if (acheck2 && bcheck1 && ccheck2 && dcheck2 && echeck1) {
    location.href = "final12result2.html";
  } else if (acheck2 && bcheck1 && ccheck2 && dcheck2 && echeck2) {
    location.href = "final12result1.html";

  } else if (acheck2 && bcheck2 && ccheck1 && dcheck1 && echeck1) {
    location.href = "final12result3.html";
  } else if (acheck2 && bcheck2 && ccheck1 && dcheck1 && echeck2) {
    location.href = "final12result3.html";
  } else if (acheck2 && bcheck2 && ccheck1 && dcheck2 && echeck1) {
    location.href = "final12result1.html";
  } else if (acheck2 && bcheck2 && ccheck1 && dcheck2 && echeck2) {
    location.href = "final12result3.html";
  } else if (acheck2 && bcheck2 && ccheck2 && dcheck1 && echeck1) {
    location.href = "final12result1.html";
  } else if (acheck2 && bcheck2 && ccheck2 && dcheck1 && echeck2) {
    location.href = "final12result3.html";
  } else if (acheck2 && bcheck2 && ccheck2 && dcheck2 && echeck1) {
    location.href = "final12result1.html";
  } else {
    location.href = "final12result1.html";
  }
}
