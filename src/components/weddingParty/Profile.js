//React
import React from 'react';
//Components

const Profile = ({image, name, bio}) => {

    return (
        <div className="card col-12 col-md-3 offset-md-1 mb-4">
                <img src={image} className='card-img-top rounded-circle img-thumbnail' />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ bio }</p>
                </div>
        </div>
    );
};

export default Profile