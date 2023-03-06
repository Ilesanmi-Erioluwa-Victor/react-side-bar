import { ReactNode } from "react";
import { Route } from "react-router-dom";
import { RouteType } from "./config";
import PageWrapper from "components/layout/PageWrapper";

const generateRoute = (routes: RouteType[]): ReactNode => {
    return routes.map((route, index) => (
        route.index ? (
            <Route 
                index
                path={route.path}
                element={<PageWrapper state={route.state}>
                    
                    {route.element}
                    </PageWrapper>}
            />
        ) : (
                <Route
                    path={route.path}
                    element={
                        
                    }
                >

                </Route>
        )
    ))
}
