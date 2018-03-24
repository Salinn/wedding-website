//React
import React from 'react';
import Hotel from "./Hotel";
//Components

const Hotels = ({ hotels }) => {
    const hotelCards = hotels.map((hotel, index) => <Hotel index={index} {...hotel}/>);

    return (
        <div className='container'>
            { hotelCards }
        </div>
    );
};

export default Hotels