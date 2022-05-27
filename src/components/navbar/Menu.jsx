
import React from 'react';
import {
  HStack,
  VStack,
  Box,
  Text,
  Flex,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import MobileMenu from './MobileMenu';
import LoginButton from './LoginButton';
// import DesktopMenu from './DesktopMenu';
// import { useMediaQuery } from '@chakra-ui/react';

import './menu.scss';

export const Menu = () => {
  // const [isLargerThan768] = useMediaQuery("(min-width: 990px)");
  
  return (
    <nav>
      <VStack 
        className={
          // isLargerThan768?'':
        'sticky-navbar mobile-menu-space'}
      >
        <Box bg="gray.700" h="40px" w="100%">
          <Flex width={['100%', '80%']} m={'auto'}>
          <HStack>
            <IconButton
              as='a'
              href='https://facebook.com/quixgo'
              aria-label='btnFacebook'
              target="_blank" rel="noopener noreferrer"
              variant="ghost"
              colorScheme="grey"
              _hover={{
                background: 'grey',
              }}
              fontSize="20px"
              icon={<AiFillFacebook color="white" />}
            />
            <IconButton
              aria-label='twitter'
              variant="ghost"
              colorScheme="grey"
              _hover={{
                background: 'grey',
              }}
              fontSize="20px"
              icon={<AiOutlineTwitter color="white" />}
            />
            <IconButton
              aria-label='linkedin'
              variant="ghost"
              colorScheme="grey"
              _hover={{
                background: 'grey',
              }}
              fontSize="20px"
              icon={<AiFillLinkedin color="white" />}
            />
            <IconButton
              aria-label='googleplus'
              variant="ghost"
              colorScheme="grey"
              _hover={{
                background: 'grey',
              }}
              fontSize="20px"
              icon={<AiOutlineInstagram color="white" />}
            />
          </HStack>
          <Spacer />
          <Box display={['block','none','none']} mr='30px'>
          <LoginButton color='white'/> 
        </Box>
          <Box pt="4px" display={['none','none','block']}>
            {/* <Text as={'span'} color={'white'}>
              Opening Hours : Monday - Saturday 10 am to 6 pm
            </Text> */}
            
          </Box>
          </Flex>
        </Box>
       
        {
        // isLargerThan768?<DesktopMenu />:
        <MobileMenu />
        }
      </VStack>
    </nav>
  );
};

export default Menu;