import React from 'react';

class Task extends React.Component {


    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }

    render() {

        const completed = this.props.task.completed;

        return (
            <div className="row taskRow">
                {completed &&
                    <div className="col-12 col-md-6 completedTask">
                        <input type="checkbox"></input>
                        <div className="col-6 col-md-3">
                            {this.props.task.taskDescription}
                        </div>
                    </div>
                }
                {!completed &&
                    <div className="col-12 col-md-6">
                        <input type="checkbox"></input>
                        <div className="col-6 col-md-3">
                            {this.props.task.taskDescription}
                        </div>
                    </div>
                }
                <div className="col-6 col-md-3">
                    <button type="button" class="btn btn-danger btn-sm" onClick={this.props.task.completed}>
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