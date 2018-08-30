//React
import React from 'react';
//Components

const Activity = ({ photo, title, price, website, content }) => {
    const priceContent = price === 'Free'
        ? 'It is Free!'
        : `It is ~${price} dollars per person`
    return (
        <div className='col-12 col-sm-6 col-lg-4 mb-5'>
            <div className='card mx-2 h-100'>
                <img className='img-fluid' src={photo} />
                <div className='card-body container text-center'>
                    <h3 className='text-center'>{title}</h3>
                    <p>{content}. {priceContent}</p>
                    <p>For more information
                    <a href={website}>
                            click here
                    </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Activity