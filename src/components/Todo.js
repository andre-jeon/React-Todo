import React from "react";

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleItem(props.tasks.id)}
      className={`task${props.tasks.completed ? " completed" : ""}`}
    >
      <p>{props.tasks.name}</p>
    </div>
  );
};

export default Todo;