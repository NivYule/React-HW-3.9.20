import React from "react";
import { Route } from "react-router-dom";


interface IRoute {
    component: any,
    path: string,
    name: string
}

export default function RoutesConfiguration(props: { routes: Array<IRoute> }) {
    return <>{props.routes.map((route: IRoute) => <Route {...route} />)} </>
}