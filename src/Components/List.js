import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import "../App.css";
import { connect } from "react-redux";
import { addTask } from "../Actions";

const List = (props) => {
    const allData = props.data;
  const [update, setUpdate] = useState({});

  const toDo = allData.filter((task) => task.status === "ToDo");
  const inProgress = allData.filter((task) => task.status === "In Progress");
  const done = allData.filter((task) => task.status === "Done");

  return (
    <>
      <div className="buttons">
        <Link to={{ pathname: "/update", aboutProps: { update } }}>
          <Button variant='secondary' className="update" disabled={!toDo[0] && !inProgress[0]}>
            Update
          </Button>
        </Link>
        <Link to="/create">
          <Button variant='success' className="create">Create</Button>
        </Link>
      </div>
      <div className="main-list">
        <div className="todo">
          <h2 className='head-text'>ToDo</h2>
          {toDo.map((task) => {
            return (
              <ListGroup>
                <ListGroup.Item className='todo-task' action onClick={() => setUpdate(task)}>
                  {task.title}
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
        <div className="inProgress">
          <h2 className='head-text'>In Progress</h2>
          {inProgress.map((task) => {
            return (
              <ListGroup>
                <ListGroup.Item className='inProgress-task' action onClick={() => setUpdate(task)}>
                  {task.title}
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
        <div className="done">
          <h2 className='head-text'>Done</h2>
          {done.map((task) => {
            return (
              <ListGroup>
                <ListGroup.Item className='done-task'>{task.title}</ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.addNewTask,
  };
};

const mapDispatchtoProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchtoProps)(List);
