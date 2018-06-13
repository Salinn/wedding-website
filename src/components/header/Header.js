//React
import React from 'react';
//Components
import { Link } from 'react-router-dom';

const Header = (props) => {
  return <header className="container-fluid">
    <div className="row header-top ">
      <div className="col-md-3 order-md-1 text-md-left col-xs-12 order-2 text-center">
        <h6>July 6th 2019</h6>
        <h6>Boston, MA</h6>
      </div>
      <div className="col-md-6 order-md-2 text-md-center col-xs-12 order-1 text-center">
        <h1 className="App-title">Paul & Michelle</h1>
      </div>
      <div className="col-md-3 order-md-3 text-md-right col-xs-12 order-3 text-center">
        <h6>#DarraghClan</h6>
      </div>
    </div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <button class="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
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