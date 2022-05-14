/* eslint-disable no-unused-vars */
import React from 'react';
import {VStack,Box, Heading} from "@chakra-ui/react";
import { MainSection } from '../containers/Home/MainSection/MainSection';
import Calculater from '../containers/Home/Calculater';
import AboutUs from '../containers/Home/AboutUs';
import ChooseUs from '../containers/Home/ChooseUs';
import ContactUs from '../containers/Home/ContactUs';
import './pages.scss';
const HomePage = () => {
    return (<VStack>
        <Box as={'section'} id='home'>
            <MainSection />
        </Box>
         <Box as='section' id='calculater' className='calculate-section'>
            <Calculater />
        </Box>
       <Box as={'section'} id='whychooseus' minH='300px'>
            <ChooseUs />
        </Box>
         <Box as={'section'} id='aboutus' minH='300px' textAlign={'left'}>
            <AboutUs/>
        </Box>
        {/* <Box as={'section'} minH='400px'>
            Latest Blog
        </Box> */}
        <Box as={'section'} id='contactus' minH='400px' >
            <ContactUs />
        </Box>
        </VStack>
    );
};

export default HomePage;
