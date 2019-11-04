import React from "react";

class TaskCounter extends React.Component {
    render() {
        return (
            <div className="row d-none d-md-block">
                <div className="col">
                    You have {this.props.count} tasks outstanding
            </div>
            </div>
        );
    }
}

export default TaskCounter;