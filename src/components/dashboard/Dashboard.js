//React
import React from 'react';
//Components
import Sidebar from './Sidebar';
import Main from './Main';

const Dashboard = (props) => {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <Sidebar changeDisplayedPage={ props.changeDisplayedPage } />
                <Main {...props} />
            </div>
        </div>
    );
};

export default Dashboard