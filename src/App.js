/* This component serves as a pseudo-router. */

import React, { Component } from 'react';
import Menu from './components/navbar/Header-Menu';
import Tasks from "./components/tasks/Tasks";
import Storage from "./components/Storage";

if (Storage().get() == null) {
  Storage().init();
}

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      activePage: 1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      activePage: e
    })
  }

  render() {
    return (
			<div className="App">
				<Menu handleChange={this.handleChange} />
        {this.state.activePage === 0 && <p>Calendar</p>}
        {this.state.activePage === 1 && <Tasks />}
        {this.state.activePage === 2 && <p>Time Reports</p>}
			</div>
		);
  }
}

export default App;
