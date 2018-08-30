//React
import React from 'react';
//Components
import Title from "../utils/atoms/Title";
import Location from './Location'
import Revervations from './Revervations'

const Hotel = () => {
    return (
        <div className="container text-center">
            <Title content="The Hyatt Regency Boston Harbor" />
            <Revervations />
            <Location />
        </div>
    )
};

export default Hotel