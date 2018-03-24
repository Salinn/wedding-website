//React
import React from 'react';
//Components

const Home = ({props}) => {
    const imgSrc= 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/XHJ9Lcu/happy-romantic-couple-taking-photograph-of-sunset-using-mobile-phone-camera-wide-shot-on-red-dragon_vkvcrpg8__F0000.png';

    return (
        <div className='home-body'>
            <img src={imgSrc} className="img-fluid" alt="Responsive image" />
            <h2>Our Story</h2>
            <h2>The proposal</h2>
        </div>
    );
};

export default Home