/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react';
import {
  Tooltip,
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Button,
  Flex,
  Spacer,
  IconButton,
  Heading,
  Link
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
// import menus from './menu.config';
// import logo from '../../assets/logo/quixgo2.png';
import './menu.scss';
import {
  MdOutlineLogin

} from 'react-icons/md';
import { BiPhoneCall,BiMailSend,BiRocket } from 'react-icons/bi';
import MobileMenu from './MobileMenu'; 
const PublicMenu = () => {
  const [scroll, setScroll] = useState(false);
  const [scrollPosition,setScrollPosition]=useState(0);
  const [selectedMenu,setSelectedMenu]=useState('Home');
  const   navbarIcon = "white";
  const handleScroll=()=>{
    setScroll(window.scrollY > 50);
     const position = window.pageYOffset;
    setScrollPosition(position);
    if(position<900){
      setSelectedMenu('Home');
    }else if(position<1400){
      setSelectedMenu('Service');
    }
    else if(position<1800){
      setSelectedMenu('About');
    }
    else{
      setSelectedMenu('Contact');
    }
  };
 useEffect(() => {
   window.addEventListener("scroll", handleScroll);

   return () => {
    window.removeEventListener('scroll', handleScroll);
};
 }, []);

  return (
      <HStack 
        w="100%" 
        mx="auto" 
        px='15px'
        // className="menu-container"
        className={
          // scroll?
          'sticky-navbar menu-container'
          // :'menu-container'
        }
        >
        <Box
         w="30%"
         px="30px"
          className="menu">
          {/* <Image
            h='100px'
            maxH="193px"
            maxW="193px"
            // src={logo}
            alt="Move It Logo"
            // boxSize="100px"
            objectFit="scale-down"
          /> */}
          <Box ml={'20px'} display={'table-cell'}>
                <Heading as='h3' size='sm' mt={scroll?'10%':'40%'}  className='name-text'>QUIXGO</Heading>
                <Text className='name-sub-text'>Send any thing any where</Text>
          </Box>
        </Box>
        <VStack
        ml={'15px'} 
        w="70%" 
        position={'sticky'}
        >
        <HStack display={scroll?'none':'flex'}  w='100%' justifyContent={'space-evenly'}  className="support-bar" p={'30px 0'}>
          <Box ml={'6px'} display={'flex'} justifyContent={'space-evenly'}>
            <BiPhoneCall color="#58bed3" fontSize={'40px'} />
            <Box ml={'20px'} display={'table-cell'}>
                <Heading as='h5' size='sm'  className='text-style'>Free Call</Heading>
                <Text className='text-style'>000000</Text>
            </Box>
          </Box>
          <Box ml={'0 60px'} display={'flex'}>
            <BiMailSend color="#58bed3" fontSize={'40px'} />
            <Box ml={'20px'} display={'table-cell'}>
                <Heading as='h5' size='sm'  className='text-style'>Mail Us</Heading>
                <Text className='text-style'>support@quixgo.com</Text>
            </Box>
            
          </Box>
          <LoginButton color={navbarIcon}/>
            {/* <Button aria-label='Login' mr={2} colorScheme='blue'>Login</Button>
            
            <Button aria-label='SignUp' colorScheme='blue'>Sign UP</Button> */}
          
        </HStack>
        <Flex as={'nav'} className='navbar-menu'>
              
            <NavLink to='/home' color={selectedMenu==='Home'?'#3182ce':''} className='nav-btn'>Home</NavLink>
            <Link href='#whychooseus' color={selectedMenu==='Service'?'#3182ce':''} className='nav-btn'>Service</Link>
            <Link href='#whychooseus' color={selectedMenu==='About'?'#3182ce':''} className='nav-btn'>About Us</Link>
         
            {/* <Link href='#' className='nav-btn'>Blog</Link>
            <Link href='#' className='nav-btn'>Pages</Link> */}
            <Link href='#aboutus' color={selectedMenu==='Contact'?'#3182ce':''} className='nav-btn'>Contact</Link>
        </Flex>
        </VStack>
      </HStack>
  );
};

export default PublicMenu;
