/* eslint-disable no-unused-vars */
import React from 'react';
import {Flex,Spacer,Box,VStack,Heading,Text,Icon,HStack} from "@chakra-ui/react";
import {RiSettingsFill} from 'react-icons/ri';
import {MdOutlineSupportAgent} from 'react-icons/md';
import {FaMobileAlt,FaRoute} from 'react-icons/fa';
import './ChooseUs.scss';

export const ChooseUs = () => {
  return <Box className='chooseus-container'>
         <Heading as='h3' className='choose-header' color='blue.800'>Why Choose Us?</Heading>
      <Flex display={['block','flex']}>
        <VStack w={['100%','30%']}>
        <Box 
        // maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' 
        p={3}>
        <HStack>
       <Icon as={RiSettingsFill} w={8} h={12} color='blue.800' />
       <Heading p={2} as='h4' size={'sm'} className='box-header'> Quick Setup</Heading>
       </HStack>
        <Text p={4} color={'gray.700'}>
           Just login with your email id and update your store/office address, pickup address, shipping address,create and print label and paste it on the shipment and handover the shipment to courier partner of your choice. 
        </Text>

        </Box>
        <Box 
        // maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' 
        p={3}>
        <HStack>
       <Icon as={MdOutlineSupportAgent} w={8} h={12} color='blue.800' />
       <Heading p={2} as='h4' size={'sm'} className='box-header'> Quick support for our clients</Heading>
       </HStack>
          
          <Text p={4} color={'gray.700'}>
           We are here to provide support for all your queries with our most efficient team so that shipping will become easy and fast in competitive world. 
        </Text>
      </Box>
        </VStack>
        <Spacer/>
      <VStack w={['100%','30%']}>
      <Box 
      // maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' 
      p={3}>
      <HStack>
       <Icon as={FaMobileAlt} w={8} h={8} color='blue.800' />
          <Heading p={2} as='h4' size={'sm'} className='box-header'> Quick Mobile Access</Heading>
      </HStack>
          <Text p={4} color={'gray.700'}>
           Out of your office! no need to worry. Ship your order from anywhere you want with mobile access of our shipping platform. 
        </Text>
      </Box>
      <Box 
      // maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
       p={3}
      >
      <HStack>
       <Icon as={FaRoute} w={8} h={8} color='blue.800' />
          <Heading p={2} as='h4' size={'sm'} className='box-header'> Quick Tracking and Performance Reports</Heading>
        </HStack>  
          <Text p={4} color={'gray.700'}>
           You can easily track status and performance reports and get updated of your multiple orders at once. 
        </Text>
      </Box>
      </VStack>
      </Flex>
  </Box>;
};

export default ChooseUs;