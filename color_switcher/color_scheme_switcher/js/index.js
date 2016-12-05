document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('navyButton').onclick = switchNavy;
document.getElementById('redButton').onclick = switchRed;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchNavy() {
  document.body.style.backgroundColor = 'navy';
  document.body.style.color = 'white';
}

function switchRed() {
  document.body.style.backgroundColor = 'red';
  document.body.style.color = 'white';
}