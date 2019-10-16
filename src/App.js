import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';
function App() {
  return (
    <div className="container">

   <Header />
   <Intro introDescription ="Hello there!"/>
   <Intro introDescription ="Woooooo!"/>
   <Task taskDescription ="Buy chocolate"/>
   <Task taskDescription ="Buy gin"/>
   <Task taskDescription ="Buy crisps"/>
   </div>
  );
}

export default App;
