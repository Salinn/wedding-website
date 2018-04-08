//React
import React from 'react';
//Components
import Event from "./Event";

const Events = ({ events }) => {
    const eventsGenerated = events.map(event => <Event {...event} />);

    return (
        <div className='container text-center'>
            <h1 className='text-white'>Our wedding events</h1>
            <div className='row'>
                { eventsGenerated }
            </div>
        </div>
    );
};

export default Events