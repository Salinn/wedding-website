//React
import React from 'react';
//Components
import Event from "./Event";
import Title from '../utils/atoms/Title'

const Events = ({ events }) => {
    const eventsGenerated = events.map(event => <Event {...event} />);

    return <div className="container text-center">
        <Title content="Our wedding events" />
        <div className="row">{eventsGenerated}</div>
      </div>;
};

export default Events