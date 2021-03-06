document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');

  const newUl = document.getElementById('tasks');

  newTaskForm.addEventListener('submit', createNewTask)

  
});

const createNewTask = function (e) {
  e.preventDefault();

  //getting the form element 
  const newTaskDescription = document.getElementById('new-task-description');
  const newUl = document.getElementById('tasks');

  //creating a new tag where the tasks are going to live and assigning it to the user's input/Task description
  const newTask = document.createElement('li');
  newTask.innerHTML = newTaskDescription.value;
  newTask.setAttribute('id', 'task-id');
  const button = document.createElement('button');
  button.setAttribute('id', 'my-button');
  button.innerHTML = 'X';

  newTask.appendChild(button);

  document.addEventListener('click', function(e) {
    const button = document.getElementById('my-button');
    const tasks = document.getElementById('tasks').removeChild(newTask);
  })

//tried implementing a eventListening for when the 'X' is clicked to remove the task but it isn't functional


  //calls on appendNewTask function that appends the 'li' new tasks to the 'ul' within a 'div' tag
  appendNewTask(newTask);
  e.target.reset();

};

//function declaration
const appendNewTask = function(task) {
  document.getElementById('tasks').appendChild(task);
};


