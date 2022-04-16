import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute(props) {
    // go to home page if they're signed in
    // otherwise, go to the login page
    return props.signedIn ? <Navigate to="/home" /> : <Navigate to="/signin" />;
}
export default PrivateRoute;