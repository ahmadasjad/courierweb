import {lazy} from 'react';
const HomePage=lazy(()=>import('../pages/home.page'));
const ServicePage=lazy(()=>import('../pages/services.page'));
const AboutPage=lazy(()=>import('../pages/aboutus.page'))
const LoginPage=lazy(()=>import('../pages/login.page'));
const DashboardPage=lazy(()=>import('../pages/dashboard.page'))
const RoutesConfig=[
    {
        path:'/',
        exact:true,
        restricted:false,
        component:HomePage
    },{
        path:'/services',
        exact:true,
        restricted:false,
        component:ServicePage
    },
     {
        path:'/aboutus',
        exact:true,
        restricted:false,
        component:AboutPage
    },
    {
        path:'/login',
        exact:true,
        restricted:false,
        component:LoginPage
    },
    {
        path:'/dashboard',
        exact:true,
        restricted:true,
        component:DashboardPage
    },
   
]

export default RoutesConfig