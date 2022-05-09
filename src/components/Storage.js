import Project from "./tasks/Project-logic.js";
import Item from "./tasks/Todo-logic.js";
import sampleData from "../sample-tasks.js";

// Set data const
function createDefaultItems() {
  console.log(`createDefaultItems(): Storage().get() = ${Storage().get()}`);

  // Create empty array
  localStorage.setItem("projects", JSON.stringify([]));

  // Set default Projects
  Storage().set(new Project("Todo List 1", "12-12-2021"));

  // Set default Task
  var testItem1 = new Item("Welcome to TaskEasy!");
  testItem1.details.push(
    "www.dylanjames.is",
    "www.github.com/dylanjames",
    "← Check out the creator"
  );

  Storage().addTask(testItem1, 0);
}

export default function Storage() {
  const init = (function () {
    this.set(sampleData);
    // Load default if never initiated before. 
    //
    // this.get() is an empty array.
    // this.setActive();
    // console.log(this.get()); // Proves that this.get() contains an empty array.
    // if (this.get().length == 0) {
    //   return createDefaultItems();
    // }
  });

  const getActive = function () {
    return JSON.parse(localStorage.getItem("active") || 0);
  }

  const setActive = function (active) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    for (var i in projects) {
      if (active.id === projects[i].id) {
        return localStorage.setItem("active", JSON.stringify(i));
      }
    }
    return localStorage.setItem("active", active);
  }

  const get = function () {
    if (!localStorage.getItem("projects")) {
      localStorage.setItem("projects", JSON.stringify(sampleData));
    }
    return JSON.parse(localStorage.getItem("projects"))
  }

  const set = function (project) {
    this.get().push(project);
    return localStorage.setItem("projects", JSON.stringify(this.get()));
  }

  const addProject = function (project) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.push(project);
    return localStorage.setItem("projects", JSON.stringify(projects));
  }

  const deleteProject = function (project) {
    console.log('deleteProject clicked.');
    console.log(project);
    let array = JSON.parse(localStorage.getItem("projects"));
    array = array.filter(function (obj) {
      return obj.id !== project;
    });
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const addTask = function (task) {
    const array = JSON.parse(localStorage.getItem("projects")) || [];
    if (array.length < 1) {
      return console.log("There isn't an array here!");
    } else {
      array[this.getActive()].todos.push(task);
    }
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const deleteTask = function (task) {
    const array = JSON.parse(localStorage.getItem("projects"));
    array[getActive()].todos = array[getActive()].todos.filter(function (obj) {
      return obj.id !== task.id;
    });
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const inspect = function () {
    console.log(this.get());
  }

  const clear = function () {
    return localStorage.clear();
  }

  return { init, get, set, getActive, setActive, addProject, deleteProject, addTask, deleteTask, inspect, clear};
}