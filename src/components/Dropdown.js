import React from 'react';

class Dropdown extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Tools
            </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Mark Priority</a>
                        <a class="dropdown-item" href="#">Share</a>
                        <a class="dropdown-item" href="#">Move</a>
                        <a class="dropdown-item" href="#">View Calendar</a>

                    </div>
                </div>
            </div>
        );
    }
            
        
    
}

export default Dropdown;