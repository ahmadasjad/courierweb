import {lazy} from 'react';
const HomePage=lazy(()=>import('../pages/home.page'));
const ServicePage=lazy(()=>import('../pages/services.page'));
const AboutPage=lazy(()=>import('../pages/aboutus.page'))
const GallaryPage=lazy(()=>import('../pages/gallery.page'))
const VideoPage=lazy(()=>import('../pages/video.page'))
const ContactusPage=lazy(()=>import('../pages/contactus.page'))
const TestimonialPage=lazy(()=>import('../pages/testimonial.page'))
const BlogsPage=lazy(()=>import('../pages/blog.page'))

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
        path:'/gallery',
        exact:true,
        restricted:false,
        component:GallaryPage
    },
     {
        path:'/videos',
        exact:true,
        restricted:false,
        component:VideoPage
    },
     {
        path:'/contactus',
        exact:true,
        restricted:false,
        component:ContactusPage
    },
     {
        path:'/testimonials',
        exact:true,
        restricted:false,
        component:TestimonialPage
    },
    {
        path:'/blogs',
        exact:true,
        restricted:false,
        component:BlogsPage
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