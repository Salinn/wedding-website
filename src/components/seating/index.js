//React
import React from 'react';
//Components
import Table from "./Table";
import Title from '../utils/atoms/Title'

const Seating = ({ seating }) => {
    const seatingImages = [1, 2, 3, 4, 5].map(imageNumber => {
        return (
            <div>
                <img
                    index={imageNumber}
                    className='img-fluid'
                    src={`https://paulmichelle2019-website-photos.s3.amazonaws.com/table${imageNumber}.png`}
                />
            </div>
        )
    })

    return (
      <div className="container text-center">
            <Title content="Seating Arrangements" />
        <div className="row">
          <div className="card">{seatingImages}</div>
          <img
            className="img-fluid"
            src="https://paulmichelle2019-website-photos.s3.amazonaws.com/seatingChart.png"
          />
        </div>
      </div>
    );
};

export default Seating