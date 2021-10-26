import React from "react";
import { Component } from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";
import {
  createTask,
  deleteTask,
  fetchTasksList,
  updateTask,
} from "./taskGateway";

class TaskList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(taskList =>
      this.setState({
        tasks: taskList,
      })
    );
  };

  onDeleteTask = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  handleTaskIsDone = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updated = {
      text,
      done: !done,
    };
    updateTask(id, updated).then(() => this.fetchTasks());
  };

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks());
  };

  render() {   
    const sortList = [...this.state.tasks].sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTask onCreate={this.onCreate} />
        <ul className="list">
          {sortList.map((task) => (
            <Task
              text={task.text}
              key={task.id}
              done={task.done}
              id={task.id}
              handleTaskIsDone={this.handleTaskIsDone}
              deleteTask={this.onDeleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
