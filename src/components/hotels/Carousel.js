//React
import React from 'react';
//Components
import CarouselPhoto from './CarouselPhoto';

const Carousel = ({ index, images }) => {
    const carouselPhotos = images.map((image, index) => <CarouselPhoto index={index} image={image} />);

    return (
        <div id={`carouselControls-${index}`} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                { carouselPhotos }
            </div>
            <a class="carousel-control-prev" href={`#carouselControls-${index}`} role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href={`#carouselControls-${index}`} role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel