//React
import React from 'react';
//Components
import Title from "../utils/atoms/Title";
import Hotel from "./Hotel";

const Hotels = ({ hotels }) => {
    const hotelCards = hotels.map((hotel, index) => <Hotel index={index} {...hotel} />);

    return (
        <div className="container text-center">
            <Title content="Suggested Hotels" />
            {hotelCards}
        </div>
    )
};

export default Hotels