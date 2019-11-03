import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className="col">
        <div className="row pb-3 mb-3">
          <div className="col-8 text-align:center">
            <p>{new Date().toDateString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;