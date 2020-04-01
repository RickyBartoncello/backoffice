import React from 'react';
import {Switch, Route} from 'react-router-dom';

import List from './List';
import Edit from './Edit';

const Country = ({match: {path}}) => (
    <Switch>
        <Route path={`${path}/edit/new`} component={Edit} exact/>
        <Route path={`${path}/edit/:id`} component={Edit}/>
        <Route path={`${path}`} component={List}/>
    </Switch>
);


export default Country;
