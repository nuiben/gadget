document.addEventListener("DOMContentLoaded", function() {
  // Load tasks from local storage when the page loads
  loadTasks();
});

document.getElementById("addBtn").addEventListener("click", function() {
  var taskValue = document.getElementById("taskInput").value;
  if (taskValue.trim() !== '') {
      addTask(taskValue);
      document.getElementById("taskInput").value = ""; // Clear the input field
      saveTasks();
  }
});

function addTask(taskValue) {
  var tasks = document.getElementById("tasks");
  var newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.textContent = taskValue;
  tasks.appendChild(newTask);
}

function saveTasks() {
  var tasks = document.querySelectorAll("#tasks .task");
  var taskList = [];
  tasks.forEach(function(task) {
      taskList.push(task.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function loadTasks() {
  var storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
      storedTasks.forEach(function(task) {
          addTask(task);
      });
  }
}
