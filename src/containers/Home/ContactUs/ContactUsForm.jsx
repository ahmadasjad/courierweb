/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Box, Heading,
    FormControl,
    FormErrorMessage,
    InputLeftElement,
    Input,
    Button,
    Select,
    Stack,
    InputGroup,
    InputLeftAddon,
    Textarea,
    SimpleGrid,
    FormLabel
} from "@chakra-ui/react";
import {MdPhone,MdAlternateEmail,MdMessage} from 'react-icons/md';
import{ImUser} from 'react-icons/im';
import { Formik,Field,
    Form } from 'formik';
import * as Yup from 'yup';
export const ContactUsForm = () => {
    const initialValues={
        customerName:'',
        email:'',
        message:'',
    };
    const validationSchema= Yup.object({
        customerName: Yup.string().min(2, 'Too Short!').required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phonenumber:Yup.number(),
        message: Yup.string()
      });
      const onSubmit=values => {
        alert(JSON.stringify(values, null, 2));
      };
  return  <Formik
            initialValues={initialValues}
            //   onSubmit={(values)=>onSubmit(values)}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                onSubmit(values);
            }}
            >
                    {(props ) => (
                        <Form >
                            <Stack spacing={2}>
                        <Field name='customerName'>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.customerName  && form.touched.customerName}> 
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<ImUser color='gray.300' />}
                                    />
                                    <Input type='text' placeholder='Enter Your Name' />
                                </InputGroup>
                                <FormErrorMessage>{form.errors.customerName}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        <Field name='phonenumber'>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.phonenumber  && form.touched.phonenumber}> 
                                <InputGroup>
                                    <InputLeftElement
                                    pointerEvents='none'
                                    children={<MdPhone color='gray.300' />}
                                    />
                                    <Input type='number' placeholder='Enter Your number' />
                                </InputGroup>
                                <FormErrorMessage>{form.errors.phonenumber}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        
                        
                        <Field name='email'>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.email  && form.touched.email}> 
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                children={<MdAlternateEmail color='gray.300' />}
                                />
                                <Input type='email' placeholder='abc@example.com' />
                            </InputGroup>
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        <Field name='message'>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.message  && form.touched.message}> 
                           
                                <Textarea placeholder='message' />
                                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        <Button
                            aria-label='btnCalculate'
                            bg={'blue.600'}
                            color='white'
                            _hover={{
                                bg: "blue.500",
                              }}
                            type='submit'
                        >
                            Submit
                        </Button>
                            </Stack>
                        </Form>
                    )}
  </Formik>;

};
export default ContactUsForm;