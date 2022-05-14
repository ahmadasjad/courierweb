/* eslint-disable no-unused-vars */
import React from 'react';
import {Box, Heading,
  Text,Icon,Link
} from "@chakra-ui/react";
import './ChargeCalculater.scss';
export const CalculaterBanner = () => {
  return <Box className='why-choose-container' display={['block','block','block','table-cell']} minH='300px' w={['100%','100%','100%','50%']}>
      <Heading as='h2' className='box-header'>
      <Link href='#'  className='nav-btn'>SignUp</Link> and Get  &#8377;500 in QUIXGO Wallet
      </Heading>
      
  </Box>;
};
export default CalculaterBanner;