import React from 'react';

class Priority extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <input type="checkbox"></input>
                        <div className="col-6 col-md-3">
                            {this.props.priorityDescription}
                        </div>
                        <div className="col-6 col-md-3">
                        <button type="button" class="btn btn-danger btn-sm">Done</button>
                    </div>
                        <div className="col-6 col-md-3">
                            <button type="button" class="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
               </div>
           </div>
        );
    }


}

export default Priority;