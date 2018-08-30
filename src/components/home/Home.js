//React
import React from 'react';
import moment from 'moment'
//Components

const Home = (props) => {
    const { hero, aboutUs, theProposal, daysUntilTheWedding, today } = props;

    const aboutUsParagraphs = aboutUs.map(paragraph => <p>{paragraph}</p>)
    const theProposalParagraphs = theProposal.map(paragraph => <p>{paragraph}</p>);
    const todayParagraphs = today.map(paragraph => <p>{paragraph}</p>);

    return (
        <div className="home-body container">
            <div className="card text-center">
                <img src={hero.url} className="img-fluid" alt="Paul and Michelle" />
                <div className="card-body">
                    <h2>Paul & Michelle</h2>
                    <h4>July 6th, 2019 • Boston, MA</h4>
                    <h4>{daysUntilTheWedding} days to go!</h4>
                </div>
                <div className="row">
                    <div className='col-12'>
                        <div className="row">
                            <div className='col-12 col-sm-6'>
                                <h2>How we meet!</h2>
                                {aboutUsParagraphs} </div>
                            <div className='col-12 col-sm-6'>
                                <img src={hero.url} className="img-fluid" alt="How we met photo" />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="row">
                                <div className='col-12 col-sm-6'>
                                    <img src={hero.url} className="img-fluid" alt="Where we are today photo" />
                                </div>
                                <div className='col-12 col-sm-6'>
                                    <h2>Where are we today?</h2>
                                    {todayParagraphs}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="row">
                                    <div className='col-12 col-sm-6'>
                                        <h2>The proposal</h2>
                                        {theProposalParagraphs}
                                    </div>
                                    <div className='col-12 col-sm-6'>
                                        <img src={hero.url} className="img-fluid" alt="How we got engaged photo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home