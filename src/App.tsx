import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {Routes} from './routes'

import { Switch, BrowserRouter as Router } from "react-router-dom";
import NavBarApp from './components/navbar';
import RoutesConfiguration from './components/routes-configuration';

// jsx element

// create function element
function App() {
    return <Router>
        <Container>
            <NavBarApp />
            <Switch>
                <RoutesConfiguration  routes={Routes}/>
            </Switch>
        </Container>
    </Router>
}

export default App;