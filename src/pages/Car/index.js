import React from 'react';
import {Switch, Route} from 'react-router-dom';

import List from './List';
import Edit from './Edit';

const Car = ({match: {path}}) => (
    <Switch>
<<<<<<< HEAD
        <Route path={`${path}/edit/new`} component={Edit} exact/>
        <Route path={`${path}/edit/:id`} component={Edit}/>
=======
        <Route path={`${path}/new`} component={Edit} exact/>
        <Route path={`${path}/:id`} component={Edit}/>
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
        <Route path={`${path}`} component={List}/>
    </Switch>
);


export default Car;
