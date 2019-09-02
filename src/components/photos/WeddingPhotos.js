//React
import React from 'react';
//Components
import Title from "../utils/atoms/Title";

const Photos = ({ photos, title }) => {

    return (
      <div className="container text-center pb-5">
        <Title content={title} />
        <div className="row">
          <div className="card text-center">
            <a href="https://photos.app.goo.gl/m2KLb6g9F4im5hVz8" target="_blank">
              <img 
                className="img-fluid" 
                src="https://wedding-photos-paul-michelle-2019.s3.amazonaws.com/Michelle__Paul_Wedding/michellepaul_0358.jpg" />
            </a>
            <h1>Click The Photo Above To View All Of Our Photos!</h1>
          </div>
        </div>
      </div>
    );
};

export default Photos