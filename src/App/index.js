import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Cars from '../pages/Car';
import Country from '../pages/Country';
import Home from '../pages/Home';
import Instrument from '../pages/Instrument';
import Quote from '../pages/Quote';

export default function BasicExample() {
    return (
    <Router>
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cars">Cars</Link>
                </li>
                <li>
                    <Link to="/countries">Countries</Link>
                </li>
                <li>
                    <Link to="/instruments">Instruments</Link>
                </li>
                <li>
                    <Link to="/quotes">Quotes</Link>
                </li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cars" component={Cars}/>
                <Route path="/countries" component={Country}/>
                <Route path="/instruments" component={Instrument}/>
                <Route path="/quotes" component={Quote}/>
            </Switch>

        </>
    </Router>
    );
}
