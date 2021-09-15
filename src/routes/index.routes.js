import React,{Suspense} from 'react';
import {Switch} from 'react-router-dom';
import PrivateRoutes from './private/private.routes';
import PublicRoutes from './public/public.routes';
import RoutesConfig from './config.routes';
import RoutesFallback from './fallback.routes'
const Routes = (props) => {
    return (<Suspense fallback={RoutesFallback} >
            <Switch>
                {(RoutesConfig || []).map(routeProps => {
                    if(routeProps.restricted){
                        return <PrivateRoutes key={routeProps.path} {...routeProps} />
                    }else{
                        return <PublicRoutes key={routeProps.path} {...routeProps} />
                    }
                })}
            </Switch>

    </Suspense>
        
    )
}

export default Routes
