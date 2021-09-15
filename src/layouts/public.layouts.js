import React from 'react'
import {Container,Flex,Spacer} from '@chakra-ui/react';
import Menu from '../components/navbar/public.menu';
import logo from '../assets/public/moveitlogo.png';
const PublicLayouts = ({children}) => {
    return (
        <main>
            <header>
                <Flex>
                    <img src={logo} alt="Move It Logo" />
                    <Spacer />
                    <nav>
                            <Menu/>
                    </nav>
              </Flex>
          </header>
          <Container>
              {children}
          </Container>
       </main>
      
    )
}

export default PublicLayouts
