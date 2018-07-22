import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Therapies from '../../containers/Therapies';
import SingleTherapy from '../../containers/SingleTherapy'

const Main = props => (
    <Switch>
        <Route exact path="/" component={Therapies} />
        <Route path="/therapy/:id" component={SingleTherapy} />
    </Switch>
)

export default Main;