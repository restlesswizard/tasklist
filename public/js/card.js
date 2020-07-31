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
    id: new Date().getTime(),
    text: task.text,
  };
}

function appendTaskToCard(cardNode, taskNode) {
  cardNode.insertAdjacentHTML("beforeEnd", taskNode);
}

function clearInputValue(input) {
  input.value = '';
}

function addTaskToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('task')) || [];
  tasks.push(task);
  localStorage.setItem('task', JSON.stringify(tasks));
}

window.onload = function getAllTasks() {
  const tasksArr = JSON.parse(localStorage.getItem('task')) || [];

  tasksArr.forEach( function(text) {
    const taskNode = createTaskNode(text);
    appendTaskToCard(tasks, taskNode);
  });
}

addTask.addEventListener('click', function(event) {
  const input = document.querySelector('.input_task');
  const task = createTask({ text: input.value });
  const taskNode = createTaskNode(task);

  if (input.value === '') {
    alert('Input field is empty!');
  }
  else {
    appendTaskToCard(tasks, taskNode);
    clearInputValue(input);
  }

  addTaskToLocalStorage(task);

});
