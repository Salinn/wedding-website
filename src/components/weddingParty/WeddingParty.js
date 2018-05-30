//React
import React from 'react';
//Components
import Title from "../utils/atoms/Title";
import Profile from "./Profile";

const WeddingParty = ({ weddingParty }) => {
    console.log(weddingParty, typeof (weddingParty));

    const { bridesMaids, groomsMen } = weddingParty.reduce((sortedParty, person) => {
        person.type === 'bridesmaid'
            ? sortedParty.bridesMaids.push(person)
            : sortedParty.groomsMen.push(person);

        return sortedParty
    },
        { bridesMaids: [], groomsMen: [] }
    );

    const bridesMaidsProfiles = bridesMaids.map(person => <Profile {...person} />);
    const groomsMenProfiles = groomsMen.map(person => <Profile {...person} />);

    return <div className="container text-center">
        <div className="row">
            <div className="col-12 col-md-6">
                <Title content="Bridesmaids" />
                {bridesMaidsProfiles}
            </div>
            <div className="col-12 col-md-6">
                <Title content="Groomsmen" />
                {groomsMenProfiles}
            </div>
        </div>
    </div>;
};

export default WeddingParty