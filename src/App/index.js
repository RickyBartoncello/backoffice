import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Cars from '../pages/Car/List/Component';
import Country from '../pages/Country';
import Home from '../pages/Home';
import Instruments from '../pages/Instrument';
import Quote from '../pages/Quote';

export default function BasicExample() {
    return (
        <Router>
            <>
                <nav className="bg-dark">
                    <figure>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/"><img src='./logo192.png' width='50' height='50' alt="algo"/> </Link>
                        <div className="text-center p-2">
                        &nbsp;&nbsp;&nbsp;
                            <Link to="/cars">Cars</Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/country">Countries</Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/instruments">Instruments</Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link to="/quotes">Quotes</Link>
                        </div>
                    </figure>
                </nav>
                <hr />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cars" component={Cars} />
                    <Route path="/country" component={Country} />
                    <Route path="/instruments" component={Instruments} />
                    <Route path="/quotes" component={Quote} />
                </Switch>
            </>
        </Router>
    );
}