import React from 'react';
import {Route} from 'react-router-dom';

import Login from './modules/auth/Containers/Login';
import Register from './modules/auth/Containers/Register';
import Home from './modules/auth/Containers/Home';
import {ArtistRoutes} from './modules/artists';

const routes = [
    /*{path: '/', exact: true, name: 'Home', component: AuthRoutes},*/
    /*{path: '/dashboard', name: 'Dashboard', component: AuthRoute},*/
    {path: '/', name: 'Home', component: Home, exact: true},
    {path: '/artists', name: 'Artists', component: ArtistRoutes},
    //{path: '/artists/:id', name: 'Songs', component: ArtistDetails, exact: true},
    /*{path: '/albums', name: 'Albums', component: AlbumsRoutes, exact: true},
    {path: '/artists', name: 'Artists', component: ArtistsRoutes, exact: true}*/
];

const Routes = () => {
return (
        routes.map((route, idx) => {
            return route.component && (
                <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            )
        })
);
};

export {Login, Register};
export default Routes;
