import React from "react";

import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

class Todo extends React.Component {

  state = {
    todos: [],
    value: '',
  }

  handleAdd = () => {
    const { value } = this.state;
    this.setState({
      todos: [
        ...this.state.todos,
        value
      ],
      value: '',
    });
  };

  handleDelete = value => {
    const newTodos = this.state.todos.filter(item => item !== value);
    this.setState({
      todos: newTodos
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      value
    });
  }

  render() {
    const { todos, value } = this.state;
    return (
      <div>
        <TodoInput
          value={value}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
        />
        <TodoList
          list={todos}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Todo;