import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: ""
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value

        });
        console.log(this.state);
    };
    handleSubmit = (e) => {
        this.props.onAddTodo(this.state);
        e.preventDefault();
    }


    render() {
        return (
            <div className='card col-md-4 mt-4'>
                <div className='card-header'><h3>Agregar Tarea</h3></div>
                <form className='card-body' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='title'
                            onChange={this.handleInput}
                            placeholder='title'
                            className='form-control' />

                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='responsible'
                            onChange={this.handleInput}
                            placeholder='responsible'

                            className='form-control' />

                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='description'
                            onChange={this.handleInput}
                            placeholder='description'

                            className='form-control' />

                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='priority'
                            onChange={this.handleInput}
                            placeholder='priority'

                            className='form-control' />

                    </div>
                    <button className='btn btn-success'> Save</button>
                </form>


            </div>
        )
    }

}

export default TodoForm;
