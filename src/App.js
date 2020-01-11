import React from 'react';
import "./App.css";
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import BackgroundImage from './components/BackgroundImage';
const uuidv4 = require('uuid/v4');
const axios = require('axios');

class App extends React.Component {

  state = {
    tasks: [


      // { id: uuidv4(), taskDescription: "Order six bottles of gin", completed: false },
      // { id: uuidv4(), taskDescription: "Call Ryan Reynolds back", completed: false },
      // { id: uuidv4(), taskDescription: "Post letter to solicitor", completed: true },
      // { id: uuidv4(), taskDescription: "Buy flowers for mum", completed: true },
      // { id: uuidv4(), taskDescription: "Book haircut in time for birthday", completed: true },
    ]
  }

  componentDidMount() {
    axios.get('https://p5pa4ryptk.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then((response) => {
        // handle success
        this.setState({tasks: response.data.tasks});
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  addTaskToList = (task) => {

    axios.post('https://p5pa4ryptk.execute-api.eu-west-2.amazonaws.com/dev/tasks', task)
    .then((response) => {
      let tasks = this.state.tasks;
      task.taskId = response.taskId;
      tasks.push(task);
      this.setState({tasks: tasks});
    });
  }

  deleteTask = (taskId) => {
    alert(`Are you sure you want to delete this task? ${taskId}`);
    //This will be an array of tasks that are in state
    let tasks = this.state.tasks;

    let filteredTasks = tasks.filter(function (task) {
      return task.taskId !== taskId;
    });

    this.setState({ tasks: filteredTasks });
  }



  markTaskCompleted = (taskId) => {
    alert(`App will mark task as completed ${taskId}`);
    
    const markTaskCompleted = this.state.tasks.map(task => {
      if (task.taskId === taskId) {
        
        task.completed = true;
        
      }
      return task;
    });
    
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