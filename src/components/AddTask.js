import React from 'react';

class AddTask extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <input className="form control" type="text" placeholder="Type here..."></input>
                    </div>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </div>

        );
    }

}

export default AddTask;