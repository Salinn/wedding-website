//React
import React from 'react';
//Components

const Title = (props) => {
    const { content } = props;

    return (
        <h1 className='text-white my-4'>{content}</h1>
    );
};

export default Title