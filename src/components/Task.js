import React from 'react';

class Task extends React.Component {


    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }

    render() {
       // taskCompleted = () => {
        const completed = this.props.task.completed;
          //  id: uuidv4(),
          //  taskDescription: this.state.task.completed(this.props.task.id),
        //    completed: true
    //}
   // this.props.task.completed;
//<input type="checkbox"></input>
//<div className="col-6 col-md-3">

        
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
export default Task;