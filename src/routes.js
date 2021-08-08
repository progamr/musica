import React from 'react';
import {
    // Redirect,
    Route,
    Switch
} from 'react-router-dom';

import Login from './modules/auth/Containers/Login';
import Register from './modules/auth/Containers/Register';
import Home from './modules/auth/Containers/Home';

import ArtistList from './modules/artists/Containers/ArtistsList';
import ArtistDetails from './modules/artists/Containers/ArtistDetails';

const routes = [
    /*{path: '/', exact: true, name: 'Home', component: AuthRoutes},*/
    /*{path: '/dashboard', name: 'Dashboard', component: AuthRoute},*/
    {path: '/', name: 'Home', component: Home, exact: true},
    {path: '/artists', name: 'Artists', component: ArtistList, exact: true},
    {path: '/artists/:id', name: 'Songs', component: ArtistDetails, exact: true},
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
                    // @ts-ignore
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            )
        })
        /*<Redirect from="/" to="/dashboard" />*/
);
};

export {Login, Register};
export default Routes;
