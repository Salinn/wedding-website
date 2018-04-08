//React
import React from 'react';
import Activity from "./Activity";
//Components

const Activities = ({ activities }) => {
    console.log(activities);
    const activitiesGenerated = activities.map(activity => <Activity { ...activity }/>);

    return (
        <div className='container text-center'>
            <h1 className='text-white'>Things to do in Boston</h1>
            <div className='row'>
                { activitiesGenerated }
            </div>
        </div>
    );
};

export default Activities