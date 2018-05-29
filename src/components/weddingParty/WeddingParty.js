//React
import React from 'react';
//Components
import Profile from "./Profile";

const WeddingParty = ({ weddingParty }) => {
    console.log(weddingParty, typeof(weddingParty));

    const {bridesMaids, groomsMen} = weddingParty.reduce((sortedParty, person) => {
            person.type === 'bridesmaid'
                ? sortedParty.bridesMaids.push(person)
                : sortedParty.groomsMen.push(person);

            return sortedParty
        },
        { bridesMaids: [], groomsMen: [] }
    );

    const bridesMaidsProfiles = bridesMaids.map(person => <Profile {...person}/>);
    const groomsMenProfiles = groomsMen.map(person => <Profile {...person}/>);

    return (
        <div className='container text-center'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <h1 className='text-white'>Bridesmaids</h1>
                    { bridesMaidsProfiles }
                </div>
                <div className='col-12 col-md-6'>
                    <h1 className='text-white'>Groomsmen</h1>
                    { groomsMenProfiles }
                </div>
            </div>
        </div>
    );
};

export default WeddingParty