window.addEventListener('load', () => {
  let formTag = document.querySelector("#new-task-form");
  let newTaskInput = document.querySelector("#new-task-input");
  let taskList = document.querySelector("#tasks");
  let dateTag = document.querySelector("#getDateNow");
  let completeTasks = document.querySelector("#taskListNo");
  let isSAved = false;
  let isCheckedTask = false;
  let lastTask = "";
  let compTasksCount = 0;
  
  formTag.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const task = newTaskInput.value;

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskElementText = document.createElement("div");
    taskElementText.classList.add("content");

    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.classList.add("checkedTask");
    taskInputEl.type = "text";
    taskInputEl.setAttribute("readonly", "readonly");
    lastTask = task;
    taskInputEl.value = lastTask;

    console.log("Last task " + lastTask);
    console.log("Dotood input " + taskInputEl.value);
    
    const taskActionElements = document.createElement("div");
    taskActionElements.classList.add("actions");

    const taskEditBtn = document.createElement("button");
    taskEditBtn.classList.add("edit");
    taskEditBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;

    const taskCheckBtn = document.createElement("button");
    taskCheckBtn.classList.add("check");
    taskCheckBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.classList.add("delete");
    taskDeleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    taskElementText.appendChild(taskInputEl);
    taskActionElements.appendChild(taskEditBtn);
    taskActionElements.appendChild(taskCheckBtn);
    taskActionElements.appendChild(taskDeleteBtn);

    taskElement.appendChild(taskElementText);
    taskElement.appendChild(taskActionElements);
    taskList.appendChild(taskElement);

    taskEditBtn.addEventListener("click", (e) => {
      if (!isSAved) {
        taskEditBtn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`;
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
        isSAved = true;
      } else {
        taskEditBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
        taskInputEl.setAttribute("readonly", "readonly");
        isSAved = false;
      }
    });

    taskCheckBtn.addEventListener("click", (e) => {      
      if (!isCheckedTask) {
        taskInputEl.classList.remove("checkedTask");
        taskInputEl.dispatchEvent(new Event("click"));
        isCheckedTask = true;
      } else {
        taskInputEl.classList.add("checkedTask");
        isCheckedTask = false;
      }
    });

    taskDeleteBtn.addEventListener("click", (e) => {
      compTasksCount -= 2;
      taskList.removeChild(taskElement);
    });

    compTasksCount++;
    completeTasks.textContent = `${compTasksCount} task үлдлээ`;
    newTaskInput.value = "";
  });

  
  
});

function addTask(text) {
  const task = document.createElement('li');
  task.textContent = text;
  taskList.appendChild(task);
}
