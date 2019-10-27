import React from 'react';
import "./App.css";
import Header from './components/Header';
import Priority from './components/Priority';
import Task from './components/Task';
import Dropdown from './components/Dropdown';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import BackgroundImage from './components/BackgroundImage';

class App extends React.Component {

  state = {
      tasks: [

      ]
  }

  addTaskToList = (task) => {
      let tasks = this.state.tasks;

      tasks.push(task);

      this.setState({tasks});
  }
  render() {

  return (
    <div className="container">
      
      <BackgroundImage />
      <Header />
      <Dropdown />
      <br></br>
      <AddTask newTask={this.addTaskToList} />
      <br></br>
      <Priority />
      <Priority />
      <TaskCounter count={this.state.tasks.length} />
      <TaskList tasks={this.state.tasks} />
      </div>

      /*<Header />
      <Dropdown />
      <br></br>
      <AddTask />
      <br></br>
      <Priority priorityDescription="Finish layout for ToDo ToDay app" />
      <Priority priorityDescription="Book doctor's appointment" />
      <br></br>
      <br></br>
      <Task taskDescription="Order six bottles of gin" />
      <Task taskDescription="Call Ryan Reynolds back" />
      <Task taskDescription="Post letter to solicitor" />
      <Task taskDescription="Buy flowers for mum" />
      <Task taskDescription="Book haircut in time for birthday" />
    </div>*/
  );
  
  
}
}

export default App;
