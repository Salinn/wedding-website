//React
import React from 'react';
//Components

const Profile = ({ image, name, bio }) => {

    return (
        <div className="card col-12 mb-4">
            <img src={image} alt={name} className='card-img-top rounded-circle img-thumbnail w-50 mx-auto d-block' />
            <div className="card-body">
                <h1 className="card-title display-4">{name}</h1>
                <h3 className="card-text" dangerouslySetInnerHTML={{ __html: bio }} />
            </div>
        </div>
    );
};

export default Profile