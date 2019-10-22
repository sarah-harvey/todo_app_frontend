import React from 'react';
import './App.css';
import Header from './components/Header';
import Priority from './components/Priority';
import Task from './components/Task';
function App() {
  return (
    <div className="container">

   <Header />
   <Dropdown />
   <Priority priorityDescription ="Finish layout for ToDo ToDay app"/>
   <Priority priorityDescription ="Book doctor's appointment"/>
   <br></br>
   <br></br>
   <Task taskDescription ="Order six bottles of gin"/>
   <Task taskDescription ="Call Ryan Reynolds back"/>
   <Task taskDescription ="Post letter to solicitor"/>
   <Task taskDescription ="Buy flowers for mum"/>
   <Task taskDescription ="Book haircut in time for birthday"/>
   </div>
  );
}

export default App;
