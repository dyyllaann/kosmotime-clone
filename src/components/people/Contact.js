export default function Contact(firstName, lastName) {
	this.firstName = firstName;
  this.lastName = lastName;
  this.dateAdded = new Date();
	this.details = [];
	this.id = crypto.randomUUID();
}
