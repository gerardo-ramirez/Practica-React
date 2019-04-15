import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//importamos json.
import { todos } from './todos.json'
//importamos componentes:
import Navegation from './components/navegation';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      todos
    })
  };
  handleAddTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  };
  handleRemove(index) {

    if (window.confirm('seguro que quiere eliminar Task?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {



          return i !== index
        })
      })
    }

  }

  render() {
    const todos = this.state.todos.map((task, i) => {
      return (
        <div className='col-md-4' key={i}>
          <div className='card mt-4'>
            <div className='card-header'>
              <h3>{task.title}</h3>
              <spam className='badge badge-pill badge-danger ml-2'>
                {task.priority}
              </spam>
            </div>
            <div className='card-body'>
              <p> {task.description}</p>
            </div>
            <div className='card-footer'>
              <h4> {task.responsible}</h4>
              <div>
                <button className='btn btn-warning' onClick={this.handleRemove.bind(this, i)}> Borrar</button>
              </div>

            </div>


          </div>
        </div>
      )

    })

    return (
      <div className="App">
        <Navegation />
        <div className='Card'> Cantidad de Tareas ingresadas : {this.state.todos.length} </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='container'>
          <div className='row mt-4'>
            {todos}

          </div>
          <div className='row'>
            <TodoForm onAddTodo={this.handleAddTodo} />

          </div>
        </div>



      </div>
    );
  }
}

export default App;
