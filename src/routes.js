import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home';
import WeddingParty from './containers/WeddingParty';
import Events from './containers/Events';
import Hotels from './containers/Hotels'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/weddingParty' component={WeddingParty}/>
                <Route path='/events' component={Events}/>
                <Route path='/hotels' component={Hotels}/>
            </Switch>
        </BrowserRouter>
    )
}