import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addTask } from "../Actions";
import '../App.css'

function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Select status",
  });

  return (
    <>
      <div className="main-create">
        <div className="title">
          <div className='label'>
            <h4 className="title-text">Title</h4>
          </div>
          <div className='input'>
            <input
              type="text"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
          </div>
        </div>

        <div className="description">
          <div className='label'>
            <h4 className="description-text">Description</h4>
          </div>
          <div className='input'>
            <textarea
              type="text"
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            />
          </div>
        </div>

        <div className="status">
            <div className='label'>
          <h4 className="status-text">Status</h4>
          </div>
          <div className='input'>
          <Dropdown>
            <Dropdown.Toggle variant="outline" id="dropdown-basic">
              {task.status}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e) => setTask({ ...task, status: "ToDo" })}
              >
                ToDo
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => setTask({ ...task, status: "In Progress" })}
              >
                In Progress
              </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </div>

        <div className="create-button">
          <Link to="/">
            <Button variant='dark' disabled={!task.status} onClick={() => props.addTask(task)}>
              Create
            </Button>
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
};

export default connect(mapStateToProps, mapDispatchtoProps)(CreateTask);
