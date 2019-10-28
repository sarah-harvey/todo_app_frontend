//import React from 'react';


//const TodoItem = ({item, checkHandler}) => {

    //const itemCheckHandler = () => {
    //  checkHandler (item.id);
   // };
  
   // return (
   //   <div>
   //     <li
     //     style={{
      //      textDecoration: item.checked ? 'line-through' : 'none',
      //    }}
      //    onClick={itemCheckHandler}
     //   >
    //      {item.text}
    //    </li>
   //   </div>
  //  );
 // };

  //and your checkHandler in your App.js where the state resides is like this (items bein an array of items):

 // checkHandler = id => {
  //  this.setState ({
  //    items: this.state.items.map (item => {
   //     if (item.id === id) {
   //       item.checked = !item.checked;
   //     }
  //      return item;
  //    }),
 //   });
 // };

  //Don't try to change the style in a click handler. You should not change the style when a user does an action but rather do it at the time of it being rendered.