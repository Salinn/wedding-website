import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './containers/Home';
import WeddingParty from './containers/WeddingParty';
import Events from './containers/Events';
import Hotels from './containers/Hotels';
import Activities from './containers/Activities';
import Photos from './containers/Photos';
import Dashboard from './containers/Dashboard';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/weddingParty' component={WeddingParty} />
            <Route path='/events' component={Events} />
            <Route path='/hotels' component={Hotels} />
            <Route path='/activities' component={Activities} />
            <Route path='/photos' component={Photos} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    )
}