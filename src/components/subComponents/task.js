import React from 'react';

function Task(props) {


    return (
        <div className='col-md-4' key={props.index.i}>
            <div className='card mt-4'>
                <div className='card-header'>
                    <h3>{props.task.title}</h3>
                    <spam className='badge badge-pill badge-danger ml-2'>
                        {props.task.priority}
                    </spam>
                </div>
                <div className='card-body'>
                    <p> {props.task.description}</p>
                </div>
                <div className='card-footer'>
                    <h4> {props.task.responsible}</h4>
                    <div>
                        {/* No funciona : onClick={() => this.handleRemove(props.index.i)}*/}
                        <button className='btn btn-warning' onClick={() => props.remove(props.index)}> Borrar</button>
                    </div>

                </div>


            </div>
        </div>


    )



}

export default Task;
