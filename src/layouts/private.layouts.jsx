import React from 'react';
import {Container,HStack} from '@chakra-ui/react';

import logo from '../assets/logo/bodre1.png';
const PrivateLayouts = ({children}) => {
    return (
        <Container h="100vh" minW="100vw" m={0} p={0} display="Flex">
           <header>
              <img src={logo} alt="Move It Logo" />
          </header>
          <HStack>
                {children}
          </HStack>
        </Container>
    );
};

export default PrivateLayouts;