import React from 'react';

const uuidv4 = require('uuid/v4');

class AddTask extends React.Component {

    state = {
        text: ""
    }

    addTask = () => {
        const task = {
            id: uuidv4(),
            text: this.state.text,
            completed: false
        }
        if (this.state.text === "") {
          alert("Enter a task");
         }
        //utilise the function we passed down to this component
        this.props.newTask(task);

        //clear out text for UX
        this.setState({ text: "" });
    }

    textChanged = (event) => {
        let text = this.state.text;

        text = event.target.value;

        this.setState({ text });
    }



    //alert("Added in App").JSON.stringify(task);






    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <input className="form control" type="text" id="outlined-full-width" style={{ margin: 8 }} placeholder="Enter your notes here..."
                        value={this.state.text}
                        onChange={this.textChanged} />
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary" onClick={this.addTask}>Add</button>
                </div>
            </div>

        );
    }
}


export default AddTask;