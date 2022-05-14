import React,{useState,useEffect} from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    // useBreakpointValue,
    Spacer,
    // useDisclosure,
    // HStack,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    Heading,
    Portal
  } from '@chakra-ui/react';
  
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
  import {MdClose,MdMenu,MdKeyboardArrowDown,MdKeyboardArrowRight} from 'react-icons/md';
// import { BiPhoneCall,BiMailSend,BiRocket } from 'react-icons/bi';

import { useLocation } from "react-router-dom";
import LoginButton from './LoginButton';
  import { NAV_ITEMS } from '../../utils/utilityConstants';
  import './menu.scss';

  const color='blue.700';
  export default function WithSubnavigation() {
    // const { isOpen, onToggle } = useDisclosure();
    const [isLessThan980] = useMediaQuery("(max-width: 500px)");
    const [scroll, setScroll] = useState(false);
    const handleScroll=()=>{
      setScroll(window.scrollY > 50);
    };
   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
  
     return () => {
      window.removeEventListener('scroll', handleScroll);
  };
   }, []);
  
    return (
      <Flex className='navbar-menu-tab' w='100%'>
        <Box
         px="30px"
          className="menu">
          <Box ml={'20px'} display={'table-cell'}>
                <Heading as='h3' size='sm' mt={scroll?'10%':'40%'}  className='name-text'>QUIXGO</Heading>
                <Text className='name-sub-text'>Send any thing any where</Text>
          </Box>
        </Box>
        <Spacer/>
          {isLessThan980?<MobileNavItem />: <DesktopNav/>}
      </Flex>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    const location = useLocation();
    // const [scroll, setScroll] = useState(false);
    // const [scrollPosition,setScrollPosition]=useState(0);
    const [selectedMenu,setSelectedMenu]=useState('Home');
    
    let isSignup=location.pathname==='/auth/signup';
    const   navbarIcon = "white";
    const handleScroll=()=>{
  //     setScroll(window.scrollY > 50);
       const position = window.pageYOffset;
  //     setScrollPosition(position);
      if(position<900){
        setSelectedMenu('Home');
      }else if(position<1400){
        setSelectedMenu('Service');
      }
      else if(position<1700){
        setSelectedMenu('About Us');
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
      <Stack as={'nav'} direction={'row'} spacing={4} pr={'40px'} pt={'5px'}>


        {!isSignup&&NAV_ITEMS.map((navItem) => (
          
          <Box key={navItem.label} pt={2}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                {navItem.to?<NavLink to={navItem.to}>{navItem.label}</NavLink>:
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'md'}
                  fontWeight={600}
                  // color={linkColor}
                  color={selectedMenu===navItem.label?'#3182ce':linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              } 
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
       
        { isSignup&&
          <NavLink to="/">
          <Button
            fontSize="sm"
            ms="0px"
            me="0px"
            px="0px"
            mr='10px'
            // me={{ sm: "2px", md: "16px" }}
            color={color}
            variant="transparent-with-icon"
            // leftIcon={<MdOutlineLogin color={color} w="12px" h="12px" me="0px" />}
          >
            <Text color={color}>Home</Text>
          </Button>
        </NavLink>
        }

       <LoginButton color={color}/>
        
        {/* <Button aria-label='Login'  mr={1} colorScheme='blue'>Login</Button>
            
            <Button aria-label='SignUp' colorScheme='blue'>Sign UP</Button> */}
          
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={MdKeyboardArrowRight} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  const MobileNavItem = ({ label, children, href,open }) => {
    const location = useLocation();
    let isSignup=location.pathname==='/auth/signup';
    if(isSignup) 
    {
      return(
        <NavLink to="/">
        <Button
          fontSize="sm"
          ms="0px"
          me="0px"
          px="0px"
          mr='10px'
          // me={{ sm: "2px", md: "16px" }}
          color={color}
          variant="transparent-with-icon"
          // leftIcon={<MdOutlineLogin color={color} w="12px" h="12px" me="0px" />}
        >
          <Text color={color}>Home</Text>
        </Button>
      </NavLink>
      );
    }    
    
    return(<Menu>
      <MenuButton as={IconButton} 
              icon={<MdMenu color='black' w={5} h={5} />}
              variant='outline'
        />
      {/* <Portal> */}
        <MenuList>
        {NAV_ITEMS.map((navItem) => (
        
          <MenuItem as={'a'} key={navItem.label} href={navItem.href ?navItem.href: '#'}>
             {/* <Link
          p={2}
          href={navItem.href ?navItem.href: '#'}
          fontSize={'sm'}
          fontWeight={500}
          // color={linkColor}
          _hover={{
            textDecoration: 'none',
            // color: linkHoverColor,
          }}> */}
          {navItem.label}

        {/* </Link> */}
        </MenuItem>
          
        ))}
        </MenuList>
      {/* </Portal> */}
    </Menu>);
   
  };
  


 