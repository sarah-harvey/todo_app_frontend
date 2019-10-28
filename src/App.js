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
      //{ text: "Order six bottles of gin", completed: false, date: "2019-09-20" },
      //{ text: "Call Ryan Reynolds back", completed: true, date: "2019-09-18" },
      //{ text: "Post letter to solicitor", completed: true, date: "2019-09-22" },
      //{ text: "Buy flowers for mum", completed: false, date: "2019-09-20" },
      //{ text: "Book haircut in time for birthday", completed: true, date: "2019-09-18" },

   ]

  //};

}

addTaskToList = (task) => {
  let tasks = this.state.tasks;

  tasks.push(task);

  this.setState({ tasks });
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
      <Priority priorityDescription="Finish layout for ToDo ToDay app" />
      <Priority priorityDescription="Book doctor's appointment" />
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
