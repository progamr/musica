import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({component: Component, authToken, ...routeProps}) => {
    return (
        <Route
            {...routeProps}
            render={props => {
                if(!authToken){
                    return <Redirect to='/login' />
                }
                else{
                    return <Component {...props} />
                }
            }}
        />
    )
};

export default RestrictedRoute;
