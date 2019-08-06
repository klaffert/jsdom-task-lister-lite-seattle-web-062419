document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const task = document.getElementById('tasks');
  

  function logSubmit(event) {
    event.preventDefault();
    const listTask = document.createElement("li");
    task.appendChild(listTask);
    listTask.textContent = event.target.children[1].value;
  }

  form.addEventListener('submit', logSubmit);

});
 