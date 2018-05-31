//React
import React from 'react';
import moment from 'moment'
//Components

const Home = (props) => {
    const { hero, aboutUs, theProposal, daysUntilTheWedding } = props;

    const aboutUsParagraphs = aboutUs.map(paragraph => <p>{paragraph}</p>)
    const theProposalParagraphs = theProposal.map(paragraph => <p>{paragraph}</p>);

    return <div className="home-body container">
        <div className="card text-center">
            <img src={hero.url} className="img-fluid" alt="Paul and Michelle" />
            <div className="card-body">
                <h2>Paul & Michelle</h2>
                <h4>July 6th, 2019 • Boston, MA</h4>
                <h4>{daysUntilTheWedding} days to go!</h4>
            </div>
            <div className="row">
                <div className='col-12 col-sm-10 offset-sm-1'>
                    <h2>How we meet!</h2>
                    {aboutUsParagraphs}
                    <h2>The proposal</h2>
                    {theProposalParagraphs}
                </div>
            </div>
        </div>
    </div>
};

export default Home