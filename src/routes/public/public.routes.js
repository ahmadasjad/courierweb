import React from 'react'
import { Redirect } from 'react-router';
import {Route} from 'react-router-dom';
import {AUTH_USER_CG_TOKEN_KEY} from '../../utils/constant';
import PublicLayouts from '../../layouts/public.layouts';
const PublicRoutes = (props) => {
    let token=localStorage.getItem(AUTH_USER_CG_TOKEN_KEY);
    if(!!token){
        return <Redirect to="/" />;
    }
    return (
        <PublicLayouts>
            <Route {...props} />
        </PublicLayouts>
    )
}

export default PublicRoutes;
