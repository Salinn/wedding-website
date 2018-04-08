//React
import React from 'react';
//Components
import Profile from "./Profile";

const WeddingParty = ({ weddingParty }) => {
    const bridesMaidsProfiles = weddingParty.brideMaids.map(person => <Profile {...person}/>);
    const groomsMenProfiles = weddingParty.groomsMen.map(person => <Profile {...person}/>);
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