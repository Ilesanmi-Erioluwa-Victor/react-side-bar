import { ReactNode } from "react";
import { Route } from "react-router-dom";
import { RouteType } from "./config";

const generateRoute = (routes: RouteType[]): ReactNode => {
    return routes.map((route, index) => (
        route.index ? (
            <Route></Route>
        )
    ))
}
