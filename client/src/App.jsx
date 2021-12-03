import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./routes/Home";
import UpdateCountry from './routes/UpdateCountry';
import CountryPage from './routes/CountryPage';
import { CountriesContextProvider } from './context/CountriesContext';
import AboutPage from './routes/AboutPage';

const App = () => {
    return (
        <CountriesContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/countries/:id/update" component={UpdateCountry}/>
                    <Route exact path="/countries/:id" component={CountryPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    </Switch>
                </Router>
            </div>
        </CountriesContextProvider>
    )
};

export default App;