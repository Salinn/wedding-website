//React
import React from 'react';
import classNames from 'classnames';
//Components

const CarouselPhoto = ({ image, index }) => {
    const classes = classNames({
        'carousel-item': true,
        'active': index === 0
    });

    return (
        <div className={classes}>
            <img className="d-block w-100" src={image} />
        </div>
    );
};

export default CarouselPhoto