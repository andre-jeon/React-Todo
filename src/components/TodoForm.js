import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      itemText: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    // console.log(e.target.value);
    this.setState({
      itemText: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    // call addItem prop
    this.props.addItem(this.state.itemText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          value={this.state.itemText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
