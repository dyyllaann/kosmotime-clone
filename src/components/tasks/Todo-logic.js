export default function Item(title, dueDate) {
  this.title = title;
  this.details = [];
  this.dueDate = dueDate;
  this.id = crypto.randomUUID();
}