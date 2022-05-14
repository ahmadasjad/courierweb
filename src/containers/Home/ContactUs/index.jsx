
import React from 'react';
import {SimpleGrid,IconButton,Heading,Text,HStack,} from "@chakra-ui/react";

import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillLinkedin,
    AiOutlineInstagram,
  } from 'react-icons/ai';
import Card from '../../../components/Card';
import ContactForm from './ContactUsForm';
export const ContactUs = () => {
    const blackalpha='blackAlpha.800';
  return <HStack display={['block','table']} w={'calc(99vw - 1px)'} p={30}>
        <Heading as='h2' color={'blue.800'}>CONTACT DETAILS</Heading>
        <Text color={'black'}>If you have any questions about what we offer for consumers or for business, you can always email us or call us via the below details. We’ll reply within 24 hours
        </Text>
        <SimpleGrid columns={[1,2,2,4]} spacing={4}>
            <Card h='350px' mb={'1px'}>
                <Heading as='h3' mb={5} size={'md'} color={blackalpha}>Visit Our Office</Heading>
                
                <Text as={'div'} color={blackalpha}>A-14,Dharampali Palace,</Text>
                <Text as={'div'} color={blackalpha}> Bhoj Market,Sector 27,</Text>
                <Text as={'div'} color={blackalpha}>Near Vinayak Hospital, Atta,</Text>
                <Text as={'div'} color={blackalpha}>Noida -201301,India</Text> 
                     
                    
            </Card>
            {/* <Spacer /> */}
            <Card h='350px' mb={'1px'}>
                <Heading as='h3' mb={5} size={'md'} color={blackalpha}>Contact Us On</Heading>
                <Text as={'div'} color={blackalpha}>Office: 1211111</Text>
                <Text as={'div'} color={blackalpha}>customer Care:0000000</Text>
                <Text as={'div'} color={blackalpha}>mail us:Support@quixgo.com</Text>
                <Text as={'div'} color={blackalpha}>Support@quixgo.in</Text>   
            </Card>
            {/* <Spacer /> */}
            <Card h='350px' mb={'1px'}>
                <Heading as='h3' mb={5} size={'md'} color={blackalpha}>We are Social</Heading>
                <HStack>
            <IconButton
              aria-label='btnFacebook'
              variant="ghost"
              colorScheme="grey"
              _hover={{
                background: 'grey',
              }}
              fontSize="20px"
              icon={<AiFillFacebook  />}
            />
            <IconButton
              aria-label='twitter'
              variant="ghost"
              colorScheme="grey"
              _hover={{
                background: 'grey',
              }}
              fontSize="20px"
              icon={<AiOutlineTwitter/>}
            />
            <IconButton
              aria-label='linkedin'
              variant="ghost"
              colorScheme="grey"
              _hover={{
                background: 'grey',
              }}
              fontSize="20px"
              icon={<AiFillLinkedin  />}
            />
            <IconButton
              aria-label='googleplus'
              variant="ghost"
              colorScheme="grey"
              _hover={{
                background: 'grey',
              }}
              fontSize="20px"
              icon={<AiOutlineInstagram  />}
            />
          </HStack>
            </Card>
            {/* <Spacer /> */}
            <Card h='350px' mb={'1px'}>
                <Heading as='h3' size={'md'} mb={5} color={blackalpha}>Leave a Message</Heading>
                <ContactForm/>
        </Card>
        </SimpleGrid>
      
  </HStack>;
};

export default ContactUs;