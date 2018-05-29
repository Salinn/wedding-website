//React
import React from 'react';
//Components

const TableImage = ({row, accessor, CustomFunction}) => {

    return (
        <span style={{height: 100, width: 100, backgroundColor: 'grey'}}>
            <img src={ row[accessor] } className="img-fluid" width="100" height="100" alt=''/>
          </span>
    );
};

export default TableImage