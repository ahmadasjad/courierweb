import React from 'react';
import {Box,Heading,Text,HStack} from '@chakra-ui/react';
import './aboutus.scss';
export const AboutUs = () => {
  return <HStack h='auto' display={['block','table']} w={'calc(99vw - 1px)'} p={30}>
          <Box display={['block','table-cell']} w={['100%','50%']}>
          <Heading as='h5' size={'sm'} >UIXGO</Heading>
        
        <Heading as='h4' color={'blue.800'}>WE ARE QUIXGO</Heading>
          <Text p={4} color={'gray.700'}>
              We are delighted to say that QUIXGO  is made to provide you the best service experience in the Indian ecommerce industry. Our team is here to help you to get the best commercial rates from multiple courier partners, automated reports,reduce stress of delivering shipments with the help of NDR feature,service for COD & Prepaid shipments on more than 25000+ Pincodes across Pan India.
            </Text>
            {/* <Box className='about-mission-container'>
            We offers a host of logistic management services and supply chain solutions. consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
            </Box> */}

          </Box>
          <Box className='about-pic-container' display={['block','table-cell']} w={['100%','50%']}>

          </Box>
</HStack>;
};
export default AboutUs;
