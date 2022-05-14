import React from 'react';
import {
    Text,
    Button,
  } from '@chakra-ui/react';
import { BiRocket } from 'react-icons/bi';
import {
  MdOutlineLogin
} from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export const SignInButtons=({color})=>{
  const location = useLocation();
  let isSignup=location.pathname==='/auth/signup';
    return(<>
    {!isSignup&&<NavLink to="/auth/signup">
      <Button
        fontSize="sm"
        ms="0px"
        me="0px"
        px="0px"
        mr='10px'
        // me={{ sm: "2px", md: "16px" }}
        color={color}
        variant="transparent-with-icon"
        leftIcon={<MdOutlineLogin color={color} w="12px" h="12px" me="0px" />}
      >
        <Text color={color}>Sign Up</Text>
      </Button>
    </NavLink>
    }
    <NavLink to="/auth/signin" >
        <Button
        
          fontSize="sm"
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={color}
          variant="transparent-with-icon"
          leftIcon={<BiRocket color={color} w="12px" h="12px" me="0px" />}
        >
          <Text color={color}>Sign In</Text>
        </Button>
      </NavLink></>
  );};

  export default SignInButtons;