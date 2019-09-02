//React
import React from 'react';
//Components
import Photo from "./Photo";
import Title from "../utils/atoms/Title";

const Photos = ({ photos, title }) => {
    const photoCards = photos.map((photo, index) => <Photo index={index} {...photo} />);

    return <div className="container text-center">
        <Title content={title} />
        <div className="row">
          <div className="card-columns">{photoCards}</div>
        </div>
      </div>;
};

export default Photos