//React
import React from 'react';
//Components
import Title from "../utils/atoms/Title";
import Profile from "./Profile";

const DeskTop = ({ weddingParty }) => {
    const totalPerSide = weddingParty.length / 2
    const pairedWeddingParty = weddingParty.reduce((sortedParty, person, index) => {
        const position = person.id % totalPerSide
        const otherPerson = sortedParty[position] || []
        return {
            ...sortedParty,
            [position]: [...otherPerson, <Profile {...person} />]
        }
    }, {});

    const almostSortedParty = Object.keys(pairedWeddingParty).map(key => {
        const [bridesMaid, groomsMan, ...other] = pairedWeddingParty[key]
        return (
            <div className="card-deck">
                {bridesMaid}
                {groomsMan}
            </div>
        )
    })

    const lastPair = almostSortedParty.shift()
    almostSortedParty.push(lastPair)

    return <div className="container text-center">
        <div className="row">
            <div className="col-md-6">
                <Title content="Bridesmaids" />
            </div>
            <div className="col-md-6">
                <Title content="Groomsmen" />
            </div>
            {almostSortedParty}
        </div>
    </div>;
};

export default DeskTop