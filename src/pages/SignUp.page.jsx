import {
    // Box,
    SimpleGrid,
    Button,
    Flex,
    FormControl,
    InputGroup,
    FormErrorMessage,
    FormLabel,
    InputRightElement,
    // HStack,
    // Icon,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
import { Formik,
  Field,
  Form
 } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";

import { useMediaQuery } from '@chakra-ui/react';
  function SignUp() {
    const dispatch=useDispatch();
    const [show, setShow] = React.useState(false);
    const [isLessThan980] = useMediaQuery("(max-width: 500px)");
    const titleColor = useColorModeValue("blue.700", "blue.500");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const onSubmit=values => {
      // alert(JSON.stringify(values, null, 2));
      dispatch({type:'REGISTER_USER',params:values});
    };
      const initialValues={
          firstName:'',
          lastName:'',
          email:'',
          mobile:'',
          password:''
      };
      const validationSchema= Yup.object({
        firstName: Yup.string().min(2, 'Too Short!').required('Required'),
        lastName: Yup.string().min(3, 'Too Short!').required('Required'),
        email: Yup.string().matches(/^[a-z0-9+_.-]+@[a-z]+\.[a-z]{2,3}/,'Invilid Email address').required('Required'),
        mobile:Yup.string()
        .required("required")
        .matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
        // .min(10, "to short")
        .max(10, "to long")
        ,
        //  Yup.string().phone().required,  //Yup.number().min(10,'min 10 digit').max(10,'max 10 digit').required('Required'),
        password:Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
         'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.'),
      });
    return (
       
          <VStack
          pt={'130px'}
            direction="column"
            w={isLessThan980?'100vw':"100%"}
            // background="transparent"
            borderRadius="15px"
            p="40px 40px"
            // mx={{ base: "100px" }}
            bg={bgColor}
            boxShadow={isLessThan980?'':"0 20px 27px 0 rgb(45 44 48 / 74%);"}
          >
            <Text
              fontSize="xl"
              color={titleColor}
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              Register With Us
            </Text>
            <Formik
              initialValues={initialValues}
            //   onSubmit={(values)=>onSubmit(values)}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                onSubmit(values);
              }}
            >
              {() => (
                <Form >
                  <SimpleGrid columns={2} spacing={5}>
                    <Field name='firstName'>
                    {({ field, form }) => (
                    <FormControl isInvalid={form.errors.firstName  && form.touched.firstName}>
                      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        First Name
                      </FormLabel>
                      <Input
                        fontSize="sm"
                        ms="4px"
                        borderRadius="15px"
                        type="text"
                        placeholder="Your first name and Middle"
                        mb="4px"
                        size="lg"
                        // required
                        {...field}
                      />
                      <FormErrorMessage ms="14px">{form.errors.firstName}</FormErrorMessage>
                      </FormControl>
                    )}
                    </Field>
                    <Field name='lastName'>
                    {({ field, form }) => (
                    <FormControl isInvalid={form.errors.lastName  && form.touched.lastName}>
                      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        Last Name
                      </FormLabel>
                      <Input
                        fontSize="sm"
                        ms="4px"
                        borderRadius="15px"
                        type="text"
                        placeholder="Your last name"
                        mb="4px"
                        size="lg"
                        // required
                        {...field}
                      />
                      <FormErrorMessage ms="14px">{form.errors.lastName}</FormErrorMessage>
                      </FormControl>
                    )}
                    </Field>
                    </SimpleGrid>
                    <Field name='email'>
                    {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email  && form.touched.email}>
                      <FormLabel mt='10px' ms="14px" fontSize="sm" fontWeight="normal">
                        Email
                      </FormLabel>
                      <Input
                        fontSize="sm"
                        ms="4px"
                        borderRadius="15px"
                        type="email"
                        placeholder="Your email address"
                        mb="4px"
                        size="lg"
                        {...field}
                        // required
                      />
                        <FormErrorMessage ms="14px">{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                    </Field>
                    <Field name='mobile'>
                    {({ field, form }) => (
                    <FormControl isInvalid={form.errors.mobile  && form.touched.mobile}>
                      <FormLabel ms="4px" fontSize="sm" fontWeight="normal" htmlFor="mobile">
                        Mobile
                      </FormLabel>
                      <Input
                        fontSize="sm"
                        ms="4px"
                        borderRadius="15px"
                        type="text"
                        placeholder="Enter Mobile Number"
                        id='mobile'
                        mb="4px"
                        size="lg"
                        {...field}
                      />
                      <FormErrorMessage ms="14px">{form.errors.mobile}</FormErrorMessage>
                      </FormControl>
                    )}
                    </Field>
                    <Field name='password'>
                    {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password  && form.touched.password}>
                          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                            Password
                          </FormLabel>
                          <InputGroup size='md'>
                              <Input
                                fontSize="sm"
                                ms="4px"
                                borderRadius="15px"
                                type={show ? 'text' : 'password'}
                                placeholder="Your password"
                                mb="4px"
                                size="lg"
                                {...field}
                              />
                              <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={()=>setShow(!show)}>
                                  {show ? 'Hide' : 'Show'}
                                </Button>
                              </InputRightElement>
                          </InputGroup>
                        <FormErrorMessage ms="14px">{form.errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                    </Field>
                      <FormControl display="flex" alignItems="center" mb="24px">
                        <Switch id="remember-login" colorScheme="teal" me="10px" />
                        <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                          Remember me
                        </FormLabel>
                      </FormControl>
                      <Button
                        type="submit"
                        // bg="teal.300"
                        fontSize="10px"
                        // color="white"
                        fontWeight="bold"
                        w="100%"
                        h="45"
                        mb="24px"
                        bg={'blue.600'}
                        color='white'
                        _hover={{
                            bg: "blue.500",
                          }}
                        // _hover={{
                        //   bg: "teal.200",
                        // }}
                        _active={{
                          bg: "teal.400",
                        }}
                      >
                        SIGN UP
                      </Button>
                    {/* </FormControl> */}
                    </Form>
                  )}
          </Formik>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Already have an account?
                <Link
                  color={titleColor}
                  as="span"
                  ms="5px"
                  href="#"
                  fontWeight="bold"
                >
                  Sign In
                </Link>
              </Text>
            </Flex>
          </VStack>
    );
  }
  
  export default SignUp;
  