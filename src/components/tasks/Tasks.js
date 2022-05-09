import Sidebar from "./react-sidebar";
import TasksApp from "./react-app";
import Calendar from "./react-calendar";
import React from "react";
import Storage from "../Storage";

export default function Tasks() {
	const [active, setActive] = React.useState(0);
  const [tasks, setTasks] = React.useState(
    Storage().length > 0 ? Storage().get()[active].todos : ['lol']
  )
  const [projects, setProjects] = React.useState(JSON.parse(localStorage.getItem("projects")) || []);

  React.useEffect(function() {
    Storage().setActive(active);
    if (Storage().get().length > 0) { setTasks(oldTasks => Storage().get()[active].todos); }
  }, [active]);

  React.useEffect(function() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  window.addEventListener('taskModification', () => setTasks(tasks => Storage().get()[active].todos));

  function deleteProject(event, projectId) {
    event.stopPropagation();
    setProjects((prevProjects) => projects.filter((project) => project.id !== projectId));
  }

	return (
		<div id="content">
			<Sidebar 
        projects={projects}
        setProjects={setProjects}
        deleteProject={deleteProject}
        setActive={setActive} 
      />
			<TasksApp 
        active={active} 
        tasks={tasks}
        setTasks={setTasks}
      />
			<Calendar />
		</div>
	);
}