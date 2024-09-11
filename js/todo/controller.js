import Model from "./model.js";
import View from "./view.js";
const model = new Model();
const view = new View(model.tasks);

view.elements.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newTask = model.addTask(view.elements.input.value);
  view.renderTasks(newTask);
  view.clearInfo();
});

view.elements.tasksList.addEventListener("click", function (e) {
  // статус задачи
  if (e.target.getAttribute("type") === "checkbox") {
    let id = e.target.closest(".todo-item").dataset.id;

    let changedTask = model.findTask(+id);

    model.changeStatus(changedTask);

    view.changeStatus(changedTask);
  }

  //   удаление задачи
  if (e.target.getAttribute("type") === "delete") {
    let id = e.target.closest(".todo-item").dataset.id;
    let changedTask = model.findTask(+id);

    model.removeTask(changedTask);
    view.removeTask(changedTask);
  }
});
