//React
import React from 'react';
//Components

const Event = ({ title, content, location, date, time, photo, index }) => {
    const link = location.label !== 'TBD' && (
        <h5 className='text-center h2'>
            <a
                className='text-center'
                href={location.link}>
                {` ${location.label}`}
            </a>
        </h5>
    )

    const cardPhoto = (
        <div className='col-12 col-sm-6 col-lg-8'>
            <img className='img-fluid' src={photo} alt={title} />
        </div>
    )

    const cardInfo = (
        <div className='col-12 col-sm-6 col-lg-4 d-flex align-items-center'>
            <div className='card-body container text-left'>
                <h1 className='text-center display-3'><b>{title}</b></h1>
                <br />
                <h1 className='text-center h2'>{date}, {time}</h1>
                <br />
                <h5 className='text-center h2'>{content}</h5>
                <br />
                {link}
            </div>
        </div>
    )

    return (
        <div className='card col-12 mb-5'>
            <div className='row'>
                { (index % 2) === 0 ? cardPhoto : cardInfo }
                { (index % 2) === 0 ? cardInfo : cardPhoto }
            </div>
        </div>
    );
};

export default Event