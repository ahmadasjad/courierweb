
import React from 'react';
import {Box, Heading,
    FormControl,
    FormErrorMessage,
    Input,
    Button,
    Select,
    InputGroup,
    InputLeftAddon,
    SimpleGrid
} from "@chakra-ui/react";
import { Formik,Field,
    Form } from 'formik';
import * as Yup from 'yup';
import './ChargeCalculater.scss';

import {ProductType,PackagingType,ParcelQty} from '../../../utils/utilityConstants';
export const ChargeCalculater = () => {
    const onSubmit=values => {
        alert(JSON.stringify(values, null, 2));
      };
        const initialValues={
            ProductType:'',
            PackagingType:'',
            Quantity:'',
            PickUpPin:'',
            DropOffPin:'',
            height:'',
            width:'',
            depth:'',
            Weight:'',
        };
        const validationSchema= Yup.object({
            ProductType: Yup.string().required('Required'),
            PackagingType: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            Quantity: Yup.string().required('Required'),
            PickUpPin:Yup.string().required('Required').matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/,'Pin Number is not valid')             ,//min(6,'min 6 digit').max(6, 'max 6 digit').required('Required'),
            DropOffPin:Yup.string().required('Required').matches(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/,'Pin Number is not valid'),
            height:Yup.number().required('Required'),
            width:Yup.number().required('Required'),
            depth:Yup.number().required('Required'),
            Weight:Yup.number().required('Required'),
          });
         
    // });
  return <Box className='calculator-container' display={['block','table-cell']} w={['100%','50%']}>
  <Heading as={'h2'} className='calculater-header'>Shipping charge calculator</Heading>
  <Box mt={10}>
  <Formik
      initialValues={initialValues}
    //   onSubmit={(values)=>onSubmit(values)}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
      }}
    >
      {(props ) => (
        <Form >
          <SimpleGrid columns={[1,2]} spacing={4}>
          <Field name='ProductType'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.ProductType  && form.touched.ProductType}> 
              <InputGroup>
              <InputLeftAddon w={'135px'} children='Product' />
                <Select {...field} id='ProductType' placeholder='Select Product Type'>
                     {ProductType.map((pType)=><option key={pType.value} value={pType.value}>{pType.label}</option>)}
                </Select>
              </InputGroup>
                <FormErrorMessage>{form.errors.ProductType}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='PackagingType'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.PackagingType && form.touched.PackagingType}>
                <InputGroup>
                <InputLeftAddon w={'135px'} children='Packaging' />
                <Select {...field} id='PackagingType' placeholder='Select Packaging Type'>
                     {PackagingType.map((pType)=><option key={pType.value} value={pType.value}>{pType.label}</option>)}
                </Select>
                </InputGroup>
                <FormErrorMessage>{form.errors.PackagingType}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='Quantity'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.Quantity  && form.touched.Quantity}>
                <InputGroup>
                <InputLeftAddon w={'135px'} children='Quantity' />
                <Select {...field} id='Quantity' placeholder='Select Packaging Type'>
                     {ParcelQty.map((pType)=><option key={pType.value} value={pType.value}>{pType.label}</option>)}
                </Select>
                </InputGroup>
                <FormErrorMessage>{form.errors.Quantity}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='PickUpPin'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.PickUpPin  && form.touched.PickUpPin}>
              <InputGroup>
                <InputLeftAddon w={'135px'} children='Pick Up Pin' />
                <Input id='PickUpPin' type='number' placeholder='Pick Up pin'  {...field}/>
              </InputGroup>
              <FormErrorMessage>{form.errors.PickUpPin}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='DropOffPin'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.DropOffPin  && form.touched.DropOffPin}>
              <InputGroup>
                <InputLeftAddon w={'135px'} children='Drop Off Pin' />
                <Input id='DropOffPin' type='number' placeholder='Drop Off Pin' {...field}/>
              </InputGroup>
              <FormErrorMessage>{form.errors.DropOffPin}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='height'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.height  && form.touched.height}>
              <InputGroup>
                <InputLeftAddon w={'135px'} children='Height (cm)' />
                <Input id='height' type='number' placeholder='Enter Height ' {...field}/>
              </InputGroup>
              <FormErrorMessage>{form.errors.height}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='width'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.width  && form.touched.width}>
              <InputGroup>
                <InputLeftAddon w={'135px'} children='Width (cm)' />
                <Input id='width' type='number' placeholder='Enter Width' {...field}/>
              </InputGroup>
              <FormErrorMessage>{form.errors.width}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='depth'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.depth  && form.touched.depth}>
              <InputGroup>
                <InputLeftAddon w={'135px'} children='Depth (cm)' />
                <Input id='depth' type='number' placeholder='Enter Depth' {...field} />
              </InputGroup>
              <FormErrorMessage>{form.errors.depth}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='Weight'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.Weight  && form.touched.Weight}>
              <InputGroup>
                <InputLeftAddon w={'135px'} children='Weight (gm)' />
                <Input id='Weight' type='number' placeholder='Enter Weight' {...field}/>
              </InputGroup>
              <FormErrorMessage>{form.errors.Weight}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            aria-label='btnCalculate'
            // colorScheme='blue'
            type='submit'
            bg={'blue.600'}
            color='white'
            _hover={{
                bg: "blue.500",
              }}
          >
            Submit
          </Button>
          </SimpleGrid>
        </Form>
      )}
    </Formik>
    </Box>
</Box>;
};
export default ChargeCalculater;
