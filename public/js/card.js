'use strict';

let tasks = document.querySelector('.card__tasks');
let addTask = document.querySelector('.add-task-button');
const newTask = `
  <div class="task">
  <label>
    <input type="checkbox">
    <i></i>
  </label>
  <p class="task__text">task text</p>
  </div>
`;

addTask.addEventListener('click', function(event) {
  tasks.innerHTML += newTask;
});
