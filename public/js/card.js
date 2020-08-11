'use strict';

let tasks = document.querySelector('.card__tasks');
let addTask = document.querySelector('.add-task-button');

//Шаблон. Хранит разметку таска.
function createTaskNode(task) {
  return `
    <div class="task">
      <label>
        <input class="input_checkbox" type="checkbox" id=${task.id} ${task.checked && 'checked'}>
        <i></i>
      </label>
      <p class="task__text">${task.text}</p>
    </div>
  `;
}

//Фабрика. Создаёт структуру таска
//В параметры передаётся таск из
//обработчика addTask.addEventListener
//Возвращает объект таска.
function createTask(task) {
  return {
    id: new Date().getTime(),
    text: task.text,
    checked: false,
  };
}

//Присоединяет новый таск
function appendTaskToCard(cardNode, taskNode) {
  cardNode.insertAdjacentHTML("beforeEnd", taskNode);
}

//Очищает поле ввода
function clearInputValue(input) {
  input.value = '';
}

//Добавляет объект таска в LS.
//Разбирает все имеющиеся таски, засовывает
//новый таск, и собирает обратно в строку
function addTaskToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('task')) || [];
  tasks.push(task);
  localStorage.setItem('task', JSON.stringify(tasks));
}

//После перезагрузки страницы восстанавливает
//разметку всех хранящихся в LS тасков
window.onload = function onMount() {
  const tasksArr = JSON.parse(localStorage.getItem('task')) || [];

  tasksArr.forEach( function(text) {
    const taskNode = createTaskNode(text);
    appendTaskToCard(tasks, taskNode);
  });

  let checkbox = document.querySelectorAll('.input_checkbox');
  checkbox.forEach(function(elem) {
    elem.addEventListener('change', onChange);
  });
}

function onChange() {
  console.log('works')
}

function attachEvent(task) {
  let newСheckbox = document.getElementById(task.id);
  newСheckbox.addEventListener('change', onChange);
  return function detachEvent() {
    newCheckbox.removeEventListener('change', onChange);
  }
}

//Обработчик события "клик" по кнопке добавления таска
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
  attachEvent(task)
});
