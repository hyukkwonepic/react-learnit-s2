import React from "react";

class TodoList extends React.Component {
  render() {
    const { list, onDelete } = this.props;
    return list.map((item, index) => {
      return (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => onDelete(item)}>삭제</button>
        </div>
      );
    });
  }
}

export default TodoList;