import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemText: ""
    };
  }

  handleChanges = e => {
    this.setState({
      itemText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.itemText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
