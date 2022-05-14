import React from 'react';
import {Box,Heading,Text} from "@chakra-ui/react";
// import { useMediaQuery } from '@chakra-ui/react';
import '../home.scss';
export const MainSection = () => {
  // const [isLargerThan768] = useMediaQuery("(min-width: 990px)");
  return( <>
            <Box className='main-section-container' mt={
              // isLargerThan768?'0px':
            '-5px'} h={['300px','600px']} justifyContent={'center'}>
              <Box className='shadow-container'>
                <Box className='text-container'>
                  <Heading as='h1' color='white' mt={'50px'} mr={'20px'}>
                  Quick & Easy Delivery
                  </Heading>
                  <Text size='sm' color={'white'}>Get Your Shipment delivery easily and quickly </Text>
                  <Heading mt={10} as="h2" size='md'>Ship And Manage Your Order With QUIXGO...</Heading>
                  <Text size='sm' color={'white'}>The popular choice of Indian online sellers</Text>
                  <Text size='sm' color={'white'}> We deliver your product on time with safety</Text>
              </Box>
            </Box>
        </Box>
</>);
};
