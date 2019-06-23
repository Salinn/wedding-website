//React
import React from "react";
//Components

const Table = props => {
  const { tableNumber, calvinAndHobbes, peopleAtTable } = props;

  const generatedSeating = peopleAtTable.map(person => (
    <div className="col-12 col-sm-6">
      <p>{person}</p>
    </div>
  ));

  return (
    <div className="card text-center col-12 mb-5">
      <div className="row">
        <div className="col-12">
          <h2>Table {tableNumber}</h2>
        </div>
        <div className="col-12">
          <img
            className="img-fluid"
            src={calvinAndHobbes.photo}
            alt={calvinAndHobbes.title}
          />
        </div>
        <div className="col-12">
            <div className="row">
                {generatedSeating}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
