//React
import React from 'react';
//Components
import Title from "../utils/atoms/Title";
import Activity from "./Activity";

const Activities = ({ activities }) => {
    console.log(activities);
    const activitiesGenerated = activities.map(activity => <Activity { ...activity }/>);

    return <div className="container text-center">
        <Title content="Things to do in Boston" />
        <div className="row">{activitiesGenerated}</div>
      </div>;
};

export default Activities