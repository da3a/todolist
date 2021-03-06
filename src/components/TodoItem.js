import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#fefefe",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, id)}
        />
        {title}
        <button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle}>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

const itemStyle = { backgroundColor: "#f4f4f4" };

const btnStyle = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '5px 10px',
    borderRadius : '50%',
    cursor: 'pointer',
    'float': 'right'
}

export default TodoItem;
