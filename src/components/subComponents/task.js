import React from "react";
import PropTypes from "prop-types";
const Task = ({ task, remove }) => {
  return (
    <div className="col-md-4">
      <div className="card mt-4">
        <div className="card-header">
          <h3>{task.title}</h3>
          <spam className="badge badge-pill badge-danger ml-2">
            {task.priority}
          </spam>
        </div>
        <div className="card-body">
          <p> {task.description}</p>
        </div>
        <div className="card-footer">
          <h4> {task.responsible}</h4>
          <div>
            {/* No funciona : onClick={() => this.handleRemove(props.index.i)}*/}
            <button
              className="btn btn-warning"
              onClick={() => remove(task.title)}
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Task.propTypes = {
  task: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
};
export default Task;
