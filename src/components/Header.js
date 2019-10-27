import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className="col">
        <h1>ToDo ToDay</h1>
        <div className="row pb-3 mb-3">
          <div className="col-8">
            <p>{new Date().toDateString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;