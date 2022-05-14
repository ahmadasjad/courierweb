import React from 'react'
import {Container,Flex,Spacer,Image} from '@chakra-ui/react';
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
                    
                    <Image 
                        h="100px"
                        w="200px"
                        src={logo} 
                        alt="Move It Logo" 
                        // boxSize="100px"
                        objectFit="scale-down"
                    />
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
