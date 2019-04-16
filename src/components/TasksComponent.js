import React, { Component } from "react";
import { todos } from "./../todos.json";
import Navegation from "./navegation";
import TodoForm from "./TodoForm";
import Task from "./subComponents/task";

class TasksComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  handleAddTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };
  handleRemove = title => {
    if (window.confirm("seguro que quiere eliminar Task?")) {
      this.setState({
        todos: this.state.todos.filter(item => {
          return item.title !== title;
        })
      });
    }
  };

  render() {
    const todos = this.state.todos.map(item => {
      return <Task key={item.title} task={item} remove={this.handleRemove} />;
    });

    return (
      <div>
        <Navegation />
        <div className="container">
          <div className="row">
            <TodoForm onAddTodo={this.handleAddTodo} />
          </div>
        </div>

        <div className="row mt-4">{todos}</div>
      </div>
    );
  }
}

export default TasksComponent;
