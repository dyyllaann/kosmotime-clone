export default function Project(projectTitle, dueDate) {
  this.projectTitle = projectTitle;
  this.todos = [];
  this.dueDate = dueDate;
  this.id = crypto.randomUUID();
}