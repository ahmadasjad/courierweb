import React,{Suspense} from 'react';
import {Routes,Route,useNavigate } from 'react-router-dom';
// import PrivateRoutes from './private/private.routes';
// import PublicRoutes from './public/public.routes';
import RoutesConfig from './config.routes';
// import RoutesFallback from './fallback.routes';
import PublicLayouts from '../layouts/public.layouts';
const WebRoutes = (props) => {
    return (
    // <Suspense fallback={RoutesFallback} >
            <Routes>
                <Route path="/" element={<PublicLayouts />}>
                      {RoutesConfig.publicRoute.map(PublicRoute=><Route key={PublicRoute.path} {...PublicRoute} />)}
                </Route>
            </Routes>

    // </Suspense>
        
    )
}

export default WebRoutes
