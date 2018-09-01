//React
import React from 'react';
import moment from 'moment'
//Components

const Home = (props) => {
    const { hero, aboutUs, theProposal, daysUntilTheWedding, howWeMet, whereAreWe, today, engagmentPhoto } = props;

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
                        <div className="container">
                            <div className="row">
                                <div className='d-flex align-items-center'>
                                    <div className='col-12 col-sm-6 col-md-9 order-1 order-md-1'>
                                        <h2 className='align-middle'>How we meet!</h2>
                                        {aboutUsParagraphs} </div>
                                    <div className='col-12 col-sm-6 col-md-3 order-2 order-md-2'>
                                        <img src={howWeMet.url} className="img-fluid" alt="How we met photo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="container">
                                <div className="row">
                                    <div className='d-flex align-items-center'>
                                        <div className='col-12 col-sm-6 order-1 order-md-2'>
                                            <h2>Where are we today?</h2>
                                            {todayParagraphs}
                                        </div>
                                        <div className='col-12 col-sm-6 order-2 order-md-1'>
                                            <img src={whereAreWe.url} className="img-fluid" alt="Where we are today photo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="container">
                                    <div className="row">
                                        <div className='d-flex align-items-center'>
                                            <div className='col-12 col-sm-6 col-md-9 order-1 order-md-1'>
                                                <h2>The Proposal</h2>
                                                {theProposalParagraphs}
                                            </div>
                                            <div className='col-12 col-sm-6 col-md-3 order-2 order-md-2'>
                                                <img src={engagmentPhoto.url} className="img-fluid" alt="How we got engaged photo" />
                                            </div>
                                        </div>
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