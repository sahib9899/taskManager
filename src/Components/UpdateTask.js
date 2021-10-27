import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addTask, updateTask } from "../Actions";

function UpdateTask(props) {
  const update = props.location.aboutProps.update;

  const [task, setTask] = useState({
    title: update.title,
    description: update.description,
    status: 'Change Status',
  });

  return (
    <>
    <div className='main-create'>
      <div className="title">
        <h4 className='title-text'>Title</h4>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>

      <div className='description'>
        <h4 className="description-text">Description</h4>
        <textarea
          type="textarea"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>

      <div className="status">
        <h4 className='status-text'>Status</h4>
        <Dropdown>
          <Dropdown.Toggle variant="outline
          " id="dropdown-basic">
            {task.status}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            
            <Dropdown.Item
              onClick={(e) => setTask({ ...task, status: "In Progress" })}
            >
              In Progress
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setTask({ ...task, status: "Done" })}
            >
              Done
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className='create-button'>
        <Link to="/">
          <Button variant='dark' disabled={!task.status} onClick={() => props.updateTask(update, task)}>Update</Button>
        </Link>
      </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.addNewTask,
  };
};

const mapDispatchtoProps = {
  addTask,
  updateTask
};

export default connect(mapStateToProps, mapDispatchtoProps)(UpdateTask);
