'use strict';

let tasks = document.querySelector('.card__tasks');
let addTask = document.querySelector('.add-task-button');

let __id = 0;

function createTaskNode(task) {
  return `
    <div class="task">
      <label>
        <input class="input_checkbox" type="checkbox">
        <i></i>
      </label>
      <p class="task__text">${task.text}</p>
    </div>
  `;
}

function createTask(task) {
  return {
    id: ++__id,
    text: task.text,
  };
}

function appendTaskToCard(cardNode, taskNode) {
  cardNode.innerHTML += taskNode;
}

function clearInputValue(input) {
  input.value = '';
}

addTask.addEventListener('click', function(event) {
  const input = document.querySelector('.input_task');
  const task = createTask({ text: input.value });
  const taskNode = createTaskNode(task);
  appendTaskToCard(tasks, taskNode);
  clearInputValue(input)
});
