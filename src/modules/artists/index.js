import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import {ArtistsList, ArtistDetails} from './Containers';

const routes = [
    {path: '/artists', name: 'Artists', component: ArtistsList, exact: true},
    {path: '/artists/:id', name: 'ArtistDetails', component: ArtistDetails, exact: true},
];

export const ArtistRoutes = () => {
    return (
        <Switch>
            {
                routes.map((route, index) => {
                    console.log(`artist-${index}`);
                    return route.component && (
                        <Route
                            key={`artist-${index}`}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} />
                            )} />
                    )
                })
            }
        </Switch>
    );
};
