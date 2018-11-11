//React
import React from 'react'
//Components

const Home = (props) => {
    const { hero, aboutUs, theProposal, daysUntilTheWedding, howWeMet, whereAreWe, today, engagmentPhoto } = props;

    const aboutUsParagraphs = aboutUs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
    const theProposalParagraphs = theProposal.map((paragraph, index) => <p key={index}>{paragraph}</p>);
    const todayParagraphs = today.map((paragraph, index) => <p key={index}>{paragraph}</p>);

    return (
        <div>
            <img src={hero.url} alt="Michelle & Paul in Thailand with an elephant" className="img-fluid" />
            <div className="home-body container">
                <div className="card text-center">
                    <div className="card-body">
                        <h2>Michelle & Paul</h2>
                        <h4>July 6th, 2019 • Boston, MA</h4>
                        <h4>{daysUntilTheWedding} days to go!</h4>
                    </div>
                    <div className="row">
                        <div className='col-12'>
                            <div className="container">
                                <div className="row">
                                    <div className='d-flex align-items-center'>
                                        <div className="row">
                                            <div className='col-12 col-sm-6 col-md-9 order-1 order-md-1'>
                                                <h2 className='align-middle'>How we met!</h2>
                                                {aboutUsParagraphs} </div>
                                            <div className='col-12 col-sm-6 col-md-3 order-2 order-md-2'>
                                                <img src={howWeMet.url} className="img-fluid" alt="How we met" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='col-12'>
                                <div className="container">
                                    <div className="row">
                                        <div className='d-flex align-items-center'>

                                            <div className="row">
                                                <div className='col-12 col-sm-6 order-1 order-md-2'>
                                                    <h2>Where are we today?</h2>
                                                    {todayParagraphs}
                                                </div>
                                                <div className='col-12 col-sm-6 order-2 order-md-1'>
                                                    <img src={whereAreWe.url} className="img-fluid" alt="Where we are today" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className='col-12'>
                                    <div className="container">
                                        <div className="row">
                                            <div className='d-flex align-items-center'>
                                                <div className="row">
                                                    <div className='col-12 col-sm-6 col-md-9 order-1 order-md-1'>
                                                        <h2>The Proposal</h2>
                                                        {theProposalParagraphs}
                                                    </div>
                                                    <div className='col-12 col-sm-6 col-md-3 order-2 order-md-2'>
                                                        <img src={engagmentPhoto.url} className="img-fluid" alt="How we got engaged" />
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
            </div>
        </div>
    )
};

export default Home