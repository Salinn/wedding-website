import React from 'react'

const Location = () => {
    return (
        <div className='card'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-lg-8'>
                    <iframe title="Hyatt Regency on google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15532.32562240517!2d-71.05883595065917!3d42.36120107606381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3706cdbf4376d%3A0x334887160919a49!2s101+Harborside+Dr%2C+Boston%2C+MA+02128!5e0!3m2!1sen!2sus!4v1535250219001" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className='col-12 col-sm-6 col-lg-4'>
                    <div className='pt-5 pb-3 pl-3'>
                        <br />
                        <h3 className="text-left pb-2">Basic Information</h3>

                        <h5 className="text-left pb-1">Address</h5>
                        <a href='https://goo.gl/maps/f7EfDP3VxJm'>
                            <p className="text-left">101 Harborside Drive</p>
                            <p className="text-left">Boston, Massachusetts, 02128</p>
                        </a>

                        <h5 className="text-left pb-1">Phone</h5>
                        <a href='tel:16175681234'>
                            <p className="text-left">+1 617 568 1234</p>
                        </a>

                        <h5 className="text-left pb-1">Email</h5>
                        <a href='mailto:qualitybosha@hyatt.com'>
                            <p className="text-left">qualitybosha@hyatt.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location