window.addEventListener("load", () => {
  let formTag = document.querySelector("#new-task-form");
  let newTaskInput = document.querySelector("#new-task-input");
  let taskList = document.querySelector("#tasks");
  let isSAved = false;
  let isCheckedTask = false;

  formTag.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = newTaskInput.value;

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskElementText = document.createElement("div");
    taskElementText.classList.add("content");

    taskElement.appendChild(taskElementText);

    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.type = "text";
    taskInputEl.value = task;
    taskInputEl.setAttribute("readonly", "readonly");
    taskInputEl.classList.add('checkedTask');

    taskElementText.appendChild(taskInputEl);
    
    const taskActionElements = document.createElement("div");
    taskActionElements.classList.add("actions");

    const taskEditBtn = document.createElement("button");
    taskEditBtn.classList.add("edit");
    taskEditBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    
    const taskCheckBtn = document.createElement("button");
    taskCheckBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    
    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.classList.add("delete");
    taskDeleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    
    taskActionElements.appendChild(taskEditBtn);
    taskActionElements.appendChild(taskCheckBtn);
    taskActionElements.appendChild(taskDeleteBtn);

    taskElement.appendChild(taskActionElements);
    taskList.appendChild(taskElement);

    newTaskInput = "";

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
        console.log(taskCheckBtn !== null);
        if(!isCheckedTask) {
            taskInputEl.classList.remove("checkedTask");
            taskInputEl.dispatchEvent(new Event("click"));
            isCheckedTask = true;
        } else {
            taskInputEl.classList.add("checkedTask");
            isCheckedTask = false;
        }
    });

    taskDeleteBtn.addEventListener("click", (e) => {
      taskList.removeChild(taskElement);
    });
  });
});
