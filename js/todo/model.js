export default class Model {
  constructor() {
    this.tasks = [];
    this.loadFromLS();
  }

  loadFromLS() {
    let data = localStorage.getItem("tasks");
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  addTask(text) {
    let id =
      this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;

    let newTask = {
      id: id,
      status: "new",
      text: text,
    };
    this.tasks.push(newTask);

    this.saveLS();

    return newTask;
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((item) => item !== task);
    this.saveLS();
  }

  changeStatus(task) {
    if ((task.status = "done")) {
      task.status = "new";
    } else {
      task.status = "done";
    }

    this.saveLS();
  }

  findTask(id) {
    return this.tasks.find((task) => task.id === id);
  }

  saveLS() {
    let data = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", data);
  }
}
