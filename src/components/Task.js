import React from 'react';

class Task extends React.Component {

    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    markTaskCompleted = () => {
        this.props.markTaskCompletedFunc(this.props.task.id);
    }
    render() {

        const markTaskCompleted = this.props.task.completed;
        //this.props.taskCompletedFunc(this.task.id)       

        return (
            <div className="row taskRow">
                {markTaskCompleted &&
                    <div className="col-12 col-md-6 completedTask">
                        {this.props.task.taskDescription}
                    </div>

                }
                {!markTaskCompleted &&
                    <div className="col-12 col-md-6">
                        {this.props.task.taskDescription}
                    </div>
                }
                <div className="col-6 col-md-3">
                    <button type="button" class="btn btn-danger btn-sm" onClick={this.markTaskCompleted}>
                        Done
                    </button>
                </div>

                <div className="col-6 col-md-3">
                    <button type="button" class="btn btn-danger btn-sm" onClick={this.deleteTask}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }

}
//onClick={this.props.task.completed}
//<input type="checkbox"></input>
//<div className="col-6 col-md-3">
//
export default Task;