//React
import React from 'react';
//Components
import Photo from "./Photo";

const Photos = ({ photos }) => {
    const photoCards = photos.map((photo, index) => <Photo index={index} {...photo} />);

    return (
        <div className='container text-center'>
            <h1 className='text-white'>
                Some of our favorite photos
            </h1>
            <div className='row'>
                <div className='card-columns'>
                    { photoCards }
                </div>
            </div>
        </div>
    );
};

export default Photos