//React
import React from 'react';
//Components
import Event from "./Event";

const Events = ({ events }) => {
    const eventsGenerated = events.map(event => <Event {...event} />);

    return (
        <div className='container'>
            <div className='row'>
                { eventsGenerated }
            </div>
        </div>
    );
};

export default Events