//React
import React from 'react';
//Components
import { Link } from 'react-router-dom';

const Header = (props) => {
  return <header className="container-fluid">
    <div className="row header-top pt-3">
      <div className="col-md-3 order-md-1 text-md-left col-xs-12 order-2 text-center">
        <h4>July 6th 2019</h4>
        <h4>Boston, MA</h4>
      </div>
      <div className="col-md-6 order-md-2 text-md-center col-xs-12 order-1 text-center">
        <h1 className="App-title display-4">Paul & Michelle</h1>
      </div>
      <div className="col-md-3 order-md-3 text-md-right col-xs-12 order-3 text-center">
        <h4>#DarraghClan</h4>
      </div>
    </div>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <button className="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav m-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/weddingParty" className="nav-link">
              Wedding Party
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link col-auto">
              Events
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/hotels" className="nav-link col-auto">
              Places to stay
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/activities" className="nav-link col-auto">
              Things to do
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/photos" className="nav-link col-auto">
              Photos
              </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link col-auto">
              Registry
              </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link col-auto">
              RSVP
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};

export default Header