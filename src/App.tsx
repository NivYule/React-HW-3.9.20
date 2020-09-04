import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {Routes} from './routes'

import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NavBarApp from './components/navbar';

// jsx element

// create function element
function App() {
    return <Router>
        <Container>
            <NavBarApp />
            <Switch>
                <RoutesConfiguration routes={Routes} />
            </Switch>
        </Container>
    </Router>
}

interface IRoute {
    component: any,
    path: string,
    name: string
}
function RoutesConfiguration(props: { routes: Array<IRoute> }) {
    return <>{props.routes.map((route: IRoute) => <Route {...route} />)} </>
}

export default App;
