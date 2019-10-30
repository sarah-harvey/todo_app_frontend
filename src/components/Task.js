import React from 'react';

class Task extends React.Component {
//what function you want mouseOver to do when mouse over Done button:
mouseOver = () => {
    alert('Hello there');
    
}
deleteTask = () => {

    this.props.deleteTaskFunc(this.props.task.id);
   // alert("Are you sure?");
    //alert("this.props.task.id")
}
    render() {
        return (
            <div className="row taskRow">
                <div className="col-12 col-md-6">
                    <input type="checkbox"></input>
                    <div className="col-6 col-md-3">
                    {this.props.task.taskDescription}
                    </div>
                    <div className="col-6 col-md-3">
                        <button type="button" class="btn btn-danger btn-sm" onMouseOver={this.mouseOver}>Done</button>
                    </div>
                    <div className="col-6 col-md-3">
                        <button type="button" class="btn btn-danger btn-sm" onClick={this.deleteTask}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>

        );
    }

}

export default Task;