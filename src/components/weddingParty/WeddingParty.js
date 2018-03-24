//React
import React from 'react';
//Components
import Profile from "./Profile";

const WeddingParty = ({ weddingParty }) => {
    const bridesMaidsProfiles = weddingParty.brideMaids.map(person => <Profile {...person}/>);
    const groomsMenProfiles = weddingParty.groomsMen.map(person => <Profile {...person}/>);
    return (
        <div className='container weddingHeader'>
            <h2 className='text-center'>Brides Maids</h2>
            <div className='row'>
                { bridesMaidsProfiles }
            </div>
            <h2 className='text-center'>Grooms Men</h2>
            <div className='row'>
                { groomsMenProfiles }
            </div>

        </div>
    );
};

export default WeddingParty