//React
import React from 'react';
import moment from 'moment'
//Components

const Home = (props) => {
    const imgSrc = 'https://media.xogrp.com/images/1cf1eddc-f586-441b-935f-4aaa5b0f75f3~rt_0-cr_0.14.1044.536-rs_1800.h?compress=true';

    const today = moment();
    const ourWeddingDate = moment("2019-06-06", "YYYY-MM-DD");
    const daysUntilTheWedding = ourWeddingDate.diff(today, "days");

    return <div className="home-body container">
        <div className="row">
          <div className="card col-12 text-center">
            <img src={imgSrc} className="img-fluid" alt="Paul and Michelle" />
            <div className="card-body">
              <h2>Paul & Michelle</h2>
              <h4>July 6th, 2019 • Boston, MA</h4>
              <h4>{daysUntilTheWedding} days to go!</h4>
            </div>
          </div>
          <h2></h2>
            <p>What can we say about the time we spend together? Crazy to think it's been over 6 years and boy has it been a roller coaster of good times, laughs and some interesting stories. It all started one a chance meeting in June in front of the RIT Admissions building, both waiting to talk to the same person. A fun fact is at this time RIT had a horrible yellow jacket problem at certain areas, where we were was one. According to Emalee, her thought at this point was, "If I go and sit over next to that guy I'll cut my chances of getting stung in half". AJ has not regretted letting her sit down. After this encounter, we realized that we worked together and spent the remainder of the summer getting to know each other. Over the next couple of years of dating, we creating many memories with our friends at parties, hanging out and that bottle or two of wine. After college, we ended up in Richmond Virginia where new memories were created with making new friends, getting our fur-child, Fable, and buying our first house. In December AJ asked Emalee to continue to making fun memories together. And in June we cannot wait to have you all included in creating the great memories at our wedding.</p>
          <h2>The proposal</h2>
        </div>
      </div>;
};

export default Home