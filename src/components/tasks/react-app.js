import React from "react";
import Storage from "../Storage.js";
import Item from "./Todo-logic.js";

export default function TasksApp(props) {
	// (function addEventListeners() {
	// 	window.addEventListener("keyup", function (event) {
	// 		// const inputSave = document.getElementById("input-save");
	// 		// const inputCancel = document.getElementById("input-cancel");
	// 		if (event.keyCode === 13) {
	// 			event.preventDefault();
	// 			saveUserInput();
	// 		} else if (event.keyCode === 27) {
	// 			event.preventDefault();
	// 			hideUserInput();
	// 		}
	// 	});
	// })();

	function displayUserInput() {
		const input = document.getElementById("user-input-container");
		input.classList.remove("hidden");
		input.classList.add("visible");
	}

	function hideUserInput() {
		const input = document.getElementById("user-input-container");
		input.classList.remove("visible");
		input.classList.add("hidden");
		// clearUserInput();
	}

	function saveUserInput() {
		// window.dispatchEvent(new Event("storage"));
		const inputTitle = document.getElementById("input-title");
		if (inputTitle && inputTitle.value) {
			// props.setTasks(oldTasks => [...oldTasks, new Item(inputTitle.value)])
			Storage().addTask(new Item(inputTitle.value));
			hideUserInput();
			window.dispatchEvent(new Event('taskModification'));
			// clearUserInput();
		}
	}

	function addTask(item) {
		return (
			<li
				key={item.id}
				id={item.id}
				onClick={() => {
					Storage().deleteTask(item);
					const thisTask = document.getElementById(item.id);
					thisTask.className += "complete";
					setTimeout(() => {
						window.dispatchEvent(new Event('taskModification'));
					}, 1500);
				}}
			>
				<dl>
					<dt>{item.title}</dt>
				</dl>
			</li>
		);
	}

	const taskElements = props.tasks.map((task) =>
		addTask(task)
	);

	return (
		<div className="main-container" id="main">
			<div className="main" id="task-list-title">
				<h1 id="tasks">Tasks</h1>
				{taskElements}
				{taskElements.length === 0 && (
					<h3 id="defaultMessage">
						No tasks found. Click 'Add Task' to create one now.
					</h3>
				)}
			</div>

			<div className="main" id="task-list">
				<div className="main hidden" id="user-input-container">
					<li id="user-input">
						<input
							type="text"
							id="input-title"
							placeholder="Enter task name..."
						/>
						<div>
							<button onClick={() => hideUserInput()}>Cancel</button>
							<button onClick={() => saveUserInput()}>Save</button>
						</div>
					</li>
				</div>
			</div>
			<div className="main" id="task-button-div">
				<li id="task-button" onClick={() => displayUserInput()}>
					<i className="material-icons-outlined">add_task</i>Add Task
				</li>
			</div>
		</div>
	);
}