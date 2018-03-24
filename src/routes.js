import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home';
import WeddingParty from './containers/WeddingParty';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/weddingParty' component={WeddingParty}/>
            </Switch>
        </BrowserRouter>
    )
}