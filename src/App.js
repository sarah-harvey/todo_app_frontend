import React from 'react';
import "./App.css";
import Header from './components/Header';
import Priority from './components/Priority';
import Task from './components/Task';
//import Dropdown from './components/Dropdown';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import BackgroundImage from './components/BackgroundImage';

class App extends React.Component {

  state = {
    tasks: [


      { taskId: "uuidv4()", taskDescription: "Order six bottles of gin", completed: false },
      { taskId: "uuidv4()", taskDescription: "Call Ryan Reynolds back", completed: false },
      { taslId: "uuidv4()", taskDescription: "Post letter to solicitor", completed: true, date: "2019-09-22" },
      { taskId: "uuidv4()", taskDescription: "Buy flowers for mum", completed: false, date: "2019-09-20" },
      { taskId: "uuidv4()", taskDescription: "Book haircut in time for birthday", completed: true, date: "2019-09-18" },

    ]


  }

  addTaskToList = (task) => {
    let tasks = this.state.tasks;

    tasks.push(task);

    this.setState({ tasks });
  }
  deleteTask = (taskId) => {
    alert(`App will delete task' ${taskId}`);
    //This will be an array of tasks that are in state
    let tasks = this.state.tasks;

    let filteredTasks = tasks.filter(function (task) {
      return task.id !== taskId;

    });
    this.setState({ tasks: filteredTasks });

  }

  render() {

    return (
      <div className="container">

        <BackgroundImage />
        <Header />
        <Task />
        <br></br>
        <AddTask newTask={this.addTaskToList} />
        <br></br>
        <TaskCounter count={this.state.tasks.length} />
        <br></br>
        <TaskList tasks={this.state.tasks} deleteTaskFunc={this.deleteTask} />

      </div>


      /*<Priority priorityDescription="Finish layout for ToDo ToDay app" />
      <Priority priorityDescription="Book doctor's appointment" />
      <br></br>
      <br></br>
      
    </div>*/
    );


  }
}

export default App;
