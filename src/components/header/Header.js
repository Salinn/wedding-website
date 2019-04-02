//React
import React from 'react';
//Components
import { Link } from 'react-router-dom';

const Header = (props) => {
  return <header className="container-fluid">
    <div className="row header-top pt-3">
      <div className="col-md-3 order-md-1 text-md-left col-xs-12 order-2 text-center">
        <h6>July 6th 2019</h6>
        <h6>Boston, MA</h6>
      </div>
      <div className="col-md-6 order-md-2 text-md-center col-xs-12 order-1 text-center">
        <h1 className="App-title display-1">Michelle & Paul</h1>
      </div>
      <div className="col-md-3 order-md-3 text-md-right col-xs-12 order-3 text-center">
        <h6>#DarraghClan</h6>
      </div>
    </div>
    <nav className="navbar navbar-expand-md navbar-light">
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
              Accommodations
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/activities" className="nav-link col-auto">
              Activies
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/photos" className="nav-link col-auto">
              Photos
              </Link>
          </li>
          <li className="nav-item">
              <Link to="/registry" className="nav-link col-auto">
                Registry
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/comingSoon" className="nav-link col-auto">
              RSVP
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};

export default Header