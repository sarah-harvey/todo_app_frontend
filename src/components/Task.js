import React from 'react';

class Task extends React.Component {

    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.taskId);
    }
    markTaskCompleted = () => {
        this.props.markTaskCompletedFunc(this.props.task.taskId);
    }
    render() {

        const markTaskCompleted = this.props.task.completed;
               

        return (
            <div className="row taskRow">
                {markTaskCompleted ? (
                    <div className="col-12 col-md-6 completedTask">
                        {this.props.task.text}
                    </div>
                ) : (
                       
                    <div className="col-12 col-md-6">
                    {this.props.task.text}
                </div>
                )}
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

export default Task;