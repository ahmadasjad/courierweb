import React from 'react'
import {Container,Flex,Spacer} from '@chakra-ui/react';
import Menu from '../components/navbar/public.menu';
import MobileMenu from '../components/navbar/mobile_public.menu';
import logo from '../assets/public/moveitlogo.png';
import { useMediaQuery } from "@chakra-ui/react"
const PublicLayouts = ({children}) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    return (
        <main>
            <header>
                <Flex>
                    <img src={logo} alt="Move It Logo" />
                    <Spacer />
                    <nav>
                            {isLargerThan768?<Menu/>:<MobileMenu/>}
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
