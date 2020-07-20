'use strict';

let __id = 0;
let addCardButton = document.querySelector('.add-container-button');
let container = document.querySelector('.container');

function createCard(card) {
  return {
    id: ++__id,
    created_at: new Date(),
    title: card.title,
    task: card.task,
    tableId = card.tableId,
  }
}

addCardButton.addEventListener('click', function(event) {
  createCard();

})
