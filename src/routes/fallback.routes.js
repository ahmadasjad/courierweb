import React from 'react';
import {Box,Center} from '@chakra-ui/react';
// import {GridLoader} from 'react-spinners';
import {Text} from '@chakra-ui/react';

const FallbackRoute =props=>{
    return(
        <Box>
            <Center>
                {/* <GridLoader color="brand.900" loading={true} size={50}/> */}
                <Text>Loading ...</Text>
            </Center>
        </Box>
    )
}
export default FallbackRoute;