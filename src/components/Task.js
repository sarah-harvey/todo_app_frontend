import React from 'react';

class Task extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-8">
                    {this.props.taskDescription}
                </div>
                <div className="col-2">
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
        </div>
        </div>
        
        );
    }

}

export default Task;