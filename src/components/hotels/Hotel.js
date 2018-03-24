//React
import React from 'react';
//Components
import Carousel from './Carousel';

const Hotel = ({ index, name, location, images, content }) => {

    return (
        <div className='card col-12 mb-4'>
            <Carousel index={index} images={images} />
            <div className='text-center'>
                <h3>{name}</h3>
                <p>Located at
                    <a href={location.link}>
                        { ` ${ location.label }` }
                    </a>
                </p>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Hotel