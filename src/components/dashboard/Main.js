//React
import React from 'react';
//Components
import Table from './main/Table';

const Main = (props) => {

    return (
        <div className='col-12 col-md-10 bg-white'>
            <Table {...props} />
        </div>
    );
};

export default Main