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
import Instruments from '../pages/Instrument';
import Quote from '../pages/Quote';

export default function BasicExample() {
    return (
        <Router>
            <>
                <nav>
                    <figure>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/"><img src='.\homee.jpeg' width='50' height='50'></img> </Link>
                        <center>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/country"><img src='.\country.jpeg' width='100' height='50'></img></Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/cars"><img src='.\cars.jpeg' width='100' height='50'></img> </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/instruments"><img src='.\instruments.png' width='100' height='50'></img> </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/quotes"><img src='.\quotes.png' width='100' height='50'></img> </Link>
                        </center>
                    </figure>
                </nav>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cars" component={Cars}/>
                    <Route path="/country" component={Country}/>
                    <Route path="/instruments" component={Instruments}/>
                    <Route path="/quotes" component={Quote}/>
                </Switch>
            </>
        </Router>
    );
}