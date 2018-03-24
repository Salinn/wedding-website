//React
import React from 'react';
//Components

const Event = ({ title, content, location, date, time, photo }) => {

    return (
        <div className='card col-12 mb-5'>
            <img className='img-fluid' src={photo} />
            <div className='card-body container text-center'>
                <h3>{ title }</h3>
                <p>Will be hosted at
                    <a href={location.link}>
                        { ` ${ location.label }` }
                    </a>
                </p>
                <p>{ date }, { time }</p>
                <p>{ content }</p>
            </div>
        </div>
    );
};

export default Event