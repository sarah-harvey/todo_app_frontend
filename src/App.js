import React from 'react';
import "./App.css";
import Header from './components/Header';
//import Priority from './components/Priority';
//import Task from './components/Task';
//import Dropdown from './components/Dropdown';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import BackgroundImage from './components/BackgroundImage';
const uuidv4 = require('uuid/v4');

class App extends React.Component {

  state = {
    tasks: [


      { id: uuidv4(), taskDescription: "Order six bottles of gin", completed: false },
      { id: uuidv4(), taskDescription: "Call Ryan Reynolds back", completed: false },
      { id: uuidv4(), taskDescription: "Post letter to solicitor", completed: true },
      { id: uuidv4(), taskDescription: "Buy flowers for mum", completed: true },
      { id: uuidv4(), taskDescription: "Book haircut in time for birthday", completed: true },
    ]


  }

  addTaskToList = (task) => {
    let tasks = this.state.tasks;

    tasks.push(task);

    this.setState({ tasks });
  }

  deleteTask = (taskId) => {
    alert(`Are you sure you want to delete this task? ${taskId}`);
    //This will be an array of tasks that are in state
    let tasks = this.state.tasks;

    let filteredTasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });

    this.setState({ tasks: filteredTasks });
  }



  markTaskCompleted = (taskId) => {
    alert(`App will mark task as completed ${taskId}`);
    // Get an array of tasks from state

    // Use filter to identify the task that is being marked as completed and allocate to a variable
    const markTaskCompleted = this.state.tasks.map(task => {
      if (task.id === taskId) {
        // Update task and set the property to true
        task.completed = true;
        // return taskCompleted = true;
      }
      return task;
    });
    // return the task, which may or may not have been updated
    this.setState({ tasks: markTaskCompleted });
  }

  render() {

    return (
      <div className="container" >

        <BackgroundImage />
        <Header />
        <br></br>
        <AddTask newTask={this.addTaskToList} />
        <br></br>
        <TaskCounter count={this.state.tasks.length} />
        <br></br>
        <TaskList tasks={this.state.tasks} deleteTaskFunc={this.deleteTask} markTaskCompletedFunc={this.markTaskCompleted} />
      </div>

    )
  };
}


export default App;