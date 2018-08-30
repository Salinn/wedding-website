import React from 'react'

const Revervations = () => {
    const hyattPhoneNumber = (
        <a href='tel:16175681234'>
            <span className="text-left">+1 617 568 1234</span>
        </a>
    )
    return (
        <div className='pb-5'>
            <div className='card'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='p-3'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <h2 className="text-left">Phone Registration:</h2>
                                    <h5 className="text-left">Call the Hyatt Regency Boston Harbor Hotel ({hyattPhoneNumber}) and mention you're with the 'Denison-Darragh Wedding' for our group rate.</h5>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <h2 className="text-left">Online Registration:</h2>
                                    <h5 className="text-left"><a href='https://book.passkey.com/event/49640117/owner/3271/home'>Click here </a> to get our group rate</h5>
                                </div>
                            </div>
                            <br />
                            <h1 className="text-left">Parking</h1>
                            <h5 className="text-left">Self Parking: $30 per overnight vehicle</h5>
                            <h5 className="text-left">$25 parking fee for wedding event only</h5>


                            <h5 className="text-left">Complimentary 24 hour airport shuttle</h5>
                            <h5 className="text-left">Discounted Water Taxi tickets available at $18 round trip</h5>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img className='img-fluid' src='http://mccallisterphoto.com/wp-content/uploads/2018/04/2018-04-19_0001-4172861701.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revervations