import React from "react";
import Storage from "../Storage";
import Contact from "./Contact";
import "./People.css";

export default function People() {
  // const Leroy = new Contact('Leroy', 'Jenkins');
  function Person() {

  }

  const [showContactInput, setContactInput] = React.useState(false);

  function toggleShown() {

  }

	return (
		<div id="people--content">
      <h2>People</h2>
      {/* <p>{JSON.stringify(Leroy)}</p> */}
      {/* <Person /> */}
      <form>
        <input id="people--firstName"></input>
        <input id="people--lastName"></input>
      </form>
      <button id="people--add-contact" onClick={()=>toggleShown()}>
        Add Contact
      </button>
		</div>
	);
}
