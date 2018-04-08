//React
import React from 'react';
//Components

const Activity = ({photo, title, price, website, content}) => {

    return (
        <div className='card col-12 mb-5'>
            <img className='img-fluid' src={photo} />
            <div className='card-body container text-center'>
                <h3 className='text-center'>{ title }</h3>
                <p>{ content }. It is ~${price} dollars per person</p>
                <p>For more information
                    <a href={website}>
                        click here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Activity