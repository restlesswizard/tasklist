'use strict'

var header = document.querySelector('.container__header');

function headerEdit() {
  header.innerHTML = 'lolkek';
}

header.addEventListener('click', headerEdit)
