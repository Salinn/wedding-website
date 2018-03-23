//React
import React from 'react';
//Components

const Header = ({props}) => {
    return (
        <header className='container-fluid'>
            <div className='header-top row'>
                <div className='left col-md-3 order-md-1 col-xs-12 order-2'>
                    <h6>June 6th 2019</h6>
                    <h6>Boston, MA</h6>
                </div>
                <div className='center col-md-6 order-md-2 col-xs-12 order-1'>
                    <h1 className="App-title">Paul & Michelle</h1>
                </div>
                <div className='right col-md-3 order-md-3 col-xs-12 order-3'>
                    <h6>#something</h6>
                </div>
            </div>
            <div className='row'>
                <a>Home</a>
                <a>Wedding Party</a>
                <a>Events</a>
                <a>Places to stay</a>
                <a>Things to do</a>
                <a>Photos</a>
                <a>Registry</a>
                <a>FAQs</a>
                <a>RSVP</a>
            </div>
        </header>
    );
};

export default Header