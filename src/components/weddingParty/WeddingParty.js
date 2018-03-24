//React
import React from 'react';
//Components
import Profile from "./Profile";

const WeddingParty = ({ weddingParty }) => {
    const bridesMaidsProfiles = weddingParty.brideMaids.map(person => <Profile {...person}/>);
    const groomsMenProfiles = weddingParty.groomsMen.map(person => <Profile {...person}/>);
    return (
        <div className='container weddingHeader'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                <h2 className='text-center text-white bg-dark'>Bridesmaids</h2>

                    { bridesMaidsProfiles }
                </div>
                <div className='col-12 col-md-6'>
                    <h2 className='text-center text-white bg-dark'>Groomsmen</h2>

                    { groomsMenProfiles }
                </div>
            </div>
        </div>
    );
};

export default WeddingParty