import React from 'react';

class Priority extends React.Component {

render()  {
    return (
        <div className="container">
        <div className="row">
                <div className="col-8">
                {this.props.priorityDescription}
                </div>
                <div className="col-2">
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
        </div>
        </div>
        </div>
    );
}


}

export default Priority;