import React, { Component } from "react";

class Task extends Component {
  render() {
    const { task } = this.props;

    return (
      <p>
        {task.title}
        {task.description}
        {task.done}
        {task.id}
        <input type="checkbox" />
        <button>x</button>
      </p>
    );
  }
}

// {this.state.tasks.map((e) => (
//   <p key={e.id}>
//     <span>{e.title}</span>
//     {/* <Task /> */}
//   </p>
// ))}

export default Task;
