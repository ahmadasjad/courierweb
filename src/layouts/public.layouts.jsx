/* eslint-disable no-unused-vars */
import React from 'react';
import {Container} from '@chakra-ui/react';
import Menu from '../components/navbar/Menu';
// import MobileMenu from '../components/navbar/MobileMenu';
import Footer from '../containers/Footer/Footer';
import { useLocation,Outlet } from "react-router-dom";
const PublicLayouts = () => {
    const location = useLocation();
        let isSignup=location.pathname==='/auth/signup';
    return (<><header>
                    
                            
                            <Menu/>
          </header>
           <main>
            <Container w={'100vw'} mt={'110px'}>
                <Outlet />
            </Container>
            </main>
            <footer>
               {!isSignup&& <Footer/>}
            </footer>
       </>
    );
};

export default PublicLayouts;
