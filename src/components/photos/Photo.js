//React
import React from 'react';
//Components

const Photo = ({ index, image, content }) => {

    return (
        <div className='card'>
            <img className='card-img-top img-fluid'
                 data-toggle="modal"
                 data-target={`#photo-${index}`}
                 src={image} />
        </div>
    );
};

export default Photo