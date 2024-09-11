export default class View {
  constructor(tasks) {
    tasks.forEach((task) => this.renderTasks(task));
  }

  elements = {
    form: document.getElementById("form"),
    input: document.getElementById("newTask"),
    tasksList: document.getElementById("tasksList"),
  };

  renderTasks(taskObj) {
    let taskHtml = `
	<li class="todo-item" data-id=${taskObj.id}>
		<label class="todo-item-label">
			<input class="checkbox" type="checkbox" ${
        taskObj.status === "done" ? "checked" : ""
      } />
			<span class=${taskObj.status === "done" ? "completed" : ""}>${
      taskObj.text
    }</span>
			<button class="btn btn-secondary btn-sm" type="delete">Удалить</button>
		</label>
	</li>`;

    this.elements.tasksList.insertAdjacentHTML("beforeend", taskHtml);
  }

  clearInfo() {
    this.elements.input.value = "";
  }

  changeStatus(taskObj) {
    const taskElement = this.elements.tasksList.querySelector(
      `[data-id="${taskObj.id}"]`
    );

    const taskTextEl = taskElement.querySelector("span");

    if (taskObj.status === "done") {
      taskTextEl.classList.add("completed");
    } else {
      taskTextEl.classList.remove("completed");
    }
  }

  removeTask(taskObj) {
    const taskElement = this.elements.tasksList.querySelector(
      `[data-id="${taskObj.id}"]`
    );

    taskElement.remove();
  }
}
