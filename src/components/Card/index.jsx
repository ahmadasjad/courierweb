import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Card(props) {
  const { children } = props;
  return (
    <Box boxShadow="md" width="100%" rounded="md" bg="white" p={2} {...props}>
      {children}
    </Box>
  );
}
