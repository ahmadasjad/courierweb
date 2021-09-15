import React from 'react'
import { Redirect } from 'react-router';
import {Route} from 'react-router-dom';
import {AUTH_USER_CG_TOKEN_KEY} from '../../utils/constant';
import PrivateLayout from '../../layouts/private.layouts'
const PrivateRoutes = (props) => {
    let token=localStorage.getItem(AUTH_USER_CG_TOKEN_KEY);
    if(!token){
        return <Redirect to="/login" />;
    }
    return (
        <PrivateLayout>
            <Route {...props} />
        </PrivateLayout>
    )
}

export default PrivateRoutes
