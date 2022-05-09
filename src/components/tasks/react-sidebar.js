import React from "react";
import react, { useState } from "react";
import Storage from "../Storage";
import Project from "./Project-logic";
// import TasksApp from "./react-app";

function TagsContainer() {
	return (
		<div id="tags-container">
			<div id="tags-label">
				<h3 id="tags">
					<span className="material-icons">tag</span>
					Tags
					<span className="material-icons-outlined" id="left-arrow">
						expand_more
					</span>
				</h3>
			</div>
			<div id="tags-items"></div>
		</div>
	);
}

export default function Sidebar(props) {
	function ProjectInput() {
		return (
			<div className="project-input hidden" id="project-input-container">
				<li id="projectInput-input">
					<input
						type="text"
						id="project-input-title"
						placeholder="Enter project name..."
					/>
					<div>
						<button
							id="project-input-cancel"
							onClick={() => hideProjectInput()}
						>
							Cancel
						</button>
						<button id="project-input-save" onClick={() => saveProjectInput()}>
							Save
						</button>
					</div>
				</li>
			</div>
		);
	}

	function saveProjectInput() {
		const inputTitle = document.getElementById("project-input-title");
		if (inputTitle && inputTitle.value) {
			props.setProjects(oldProjects => [...oldProjects, new Project(inputTitle.value)]);
			hideProjectInput();
		}
	}

	function displayProjectInput() {
		const input = document.getElementById("project-input-container");
		input.classList.remove("hidden");
		input.classList.add("visible");
	}

	function hideProjectInput() {
		const input = document.getElementById("project-input-container");
		input.classList.remove("visible");
		input.classList.add("hidden");
	}

	const projects = props.projects.map((project, index) => (
		<h3
			key={project.projectTitle}
			id={project.projectTitle}
			onClick={() => props.setActive(index)}
		>
			<span className="material-icons icon-left color-label">circle</span>
			{project.projectTitle}
			<span
				className="material-icons-outlined icon-right delete-project-btn"
				onClick={(event) => {
					props.setActive(0);
					event.stopPropagation();
					props.deleteProject(event, project.id);
				}}
			>
				clear
			</span>
		</h3>
	));

	return (
		<div id="sidebar">
			<TagsContainer />
			<div id="projects-container">
				<h3 id="projects-label">
					<span className="material-icons">folder</span>
					Projects
					<span className="material-icons-outlined" id="down-arrow">
						expand_more
					</span>
				</h3>
				<div id="project-items">
					{projects}
					</div>
				<ProjectInput />
				<li
					className="add-button"
					id="add-new-project"
					onClick={() => displayProjectInput()}
				>
					Add New
				</li>
			</div>
		</div>
	);
}