import React from 'react';

class AddTask extends React.Component {

    state = {
        taskDescription: ""
    }

    addTask = () => {
        const task = {
            id: 1,
            taskDescription: this.state.taskDescription,
            completed: false
        }
        if(this.state.taskDescription === "") {
            alert("Enter a task");
    }
//utilise the function we passed down to this component
    this.props.newTask(task);

//clear out text for UX
    this.setState({taskDescription: ""});
}

taskDescriptionChanged = (event) => {
    let taskDescription = this.state.taskDescription;
    taskDescription = event.target.value;
    this.setState({taskDescription});
}



//alert("Added in App").JSON.stringify(task);






render() {
    return (
            <div className="row">
                <div className="col-10 col-md-12">
                    <input className="form control" type="text" placeholder="Type here..."
                    value={this.state.taskDescription} 
                    onChange={this.taskDescriptionChanged} />
                </div>
            <div className="col-md-2">
                <button type="button" className="btn btn-primary" onClick={this.addTask}>Add</button>
            </div>
        </div>

    );
}
}


export default AddTask;