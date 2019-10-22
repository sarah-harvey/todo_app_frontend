import React from 'react';

class Dropdown extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Tools
            </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Mark Priority</a>
                        <a className="dropdown-item" href="#">Share</a>
                        <a className="dropdown-item" href="#">Move</a>
                        <a className="dropdown-item" href="#">View Calendar</a>

                    </div>
                </div>
            </div>
        );
        }
            
        
    
}

export default Dropdown;