import React from 'react';

class Task extends React.Component {

    render() {
        return (
            <div className="row taskRow">
                <div className="col-6 col-md-8 green-rect input-group-mb-2">
                    <input type="checkbox"></input>
                    <div className="col-6 col-md-6">
                    {this.props.task.taskDescription}
                    </div>
                    <div className="col-3 col-md-3">
                        <button type="button" class="btn btn-danger btn-sm">Done</button>
                    </div>
                    <div className="col-3 col-md-3">
                        <button type="button" class="btn btn-danger btn-sm">Delete</button>
                    </div>
                </div>
            </div>

        );
    }

}

export default Task;