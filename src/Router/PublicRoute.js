import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
            render={props =>
            !sessionStorage.getItem('authentication') ? (
            <Component {...props} />
                ) : (
                <Redirect to={{pathname: "/" }}/>
            )
            }
        />
    )

    export default PublicRoute;