import React from 'react';

class Task extends React.Component {

    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    taskCompleted = () => {
        this.props.taskCompletedFunc(this.taskId);
    }
    render() {

        const completed = this.props.task.completed;
            
    
        return (
            <div className="row taskRow">
                {completed &&
                    <div className="col-12 col-md-6 completedTask">
                        {this.props.task.taskDescription}
                    </div>

                }
                {!completed &&
                    <div className="col-12 col-md-6">
                        {this.props.task.taskDescription}
                    </div>
                }
                <div className="col-6 col-md-3">
                    <button type="button" class="btn btn-danger btn-sm" onClick={this.taskCompleted}>
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