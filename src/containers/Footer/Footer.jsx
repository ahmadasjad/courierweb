import React from 'react';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = (props) => {
  return (
    // <svg
    //   height={32}
    //   viewBox="0 0 120 28"
    //   xmlns="http://www.w3.org/2000/svg"
      <svg width="341.101" height="77.901" viewBox="0 0 341.101 77.901" xmlns="http://www.w3.org/2000/svg"  {...props}>
        
     
      <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="black" style={{'stroke':'#000','strokeWidth':'0.25mm','fill':'black'}}><path d="M 270.801 33.401 L 270.801 55.101 A 5.127 5.127 0 0 1 270.57 56.667 A 4.335 4.335 0 0 1 269.751 58.151 Q 268.934 59.122 267.484 59.943 A 14.15 14.15 0 0 1 266.601 60.401 Q 264.101 61.701 259.701 62.551 Q 255.301 63.401 250.801 63.401 A 43.254 43.254 0 0 1 242.054 62.554 A 33.728 33.728 0 0 1 234.351 60.001 Q 227.201 56.601 223.201 49.601 Q 219.201 42.601 219.201 31.801 A 45.696 45.696 0 0 1 219.784 24.289 Q 220.498 20.006 222.087 16.492 A 25.579 25.579 0 0 1 223.351 14.051 Q 227.501 7.001 234.401 3.501 A 32.764 32.764 0 0 1 248.926 0.005 A 38.105 38.105 0 0 1 249.501 0.001 A 46.042 46.042 0 0 1 254.22 0.23 Q 257.082 0.526 259.501 1.201 Q 262.544 2.05 264.636 3.2 A 13.218 13.218 0 0 1 266.201 4.201 Q 268.601 6.001 268.601 7.901 Q 268.601 9.201 267.801 10.251 A 5.245 5.245 0 0 1 266.699 11.337 A 4.653 4.653 0 0 1 265.901 11.801 Q 263.243 10.029 259.616 8.499 A 51.882 51.882 0 0 0 259.501 8.451 A 17.794 17.794 0 0 0 256.152 7.448 Q 253.447 6.901 250.001 6.901 A 24.426 24.426 0 0 0 242.421 8.05 A 22.064 22.064 0 0 0 238.601 9.701 A 19.584 19.584 0 0 0 231.172 16.952 A 23.96 23.96 0 0 0 230.551 18.051 Q 227.877 23.08 227.627 30.287 A 43.566 43.566 0 0 0 227.601 31.801 A 39.825 39.825 0 0 0 227.995 37.575 Q 228.697 42.359 230.651 45.851 A 19.746 19.746 0 0 0 235.552 51.72 A 18.702 18.702 0 0 0 239.001 53.901 Q 244.301 56.501 250.901 56.501 Q 254.501 56.501 257.701 55.901 A 31.517 31.517 0 0 0 259.564 55.496 Q 261.433 55.027 262.661 54.421 A 9.149 9.149 0 0 0 262.701 54.401 L 262.701 36.001 L 247.601 36.001 Q 247.399 35.665 247.197 35.171 A 11.583 11.583 0 0 1 247.001 34.651 A 5.305 5.305 0 0 1 246.719 33.291 A 6.314 6.314 0 0 1 246.701 32.801 Q 246.701 31.101 247.501 30.151 A 2.592 2.592 0 0 1 249.012 29.276 A 3.923 3.923 0 0 1 249.801 29.201 L 266.501 29.201 A 4.666 4.666 0 0 1 268.187 29.497 A 4.255 4.255 0 0 1 269.551 30.351 A 3.808 3.808 0 0 1 270.77 32.825 A 5.283 5.283 0 0 1 270.801 33.401 Z M 57.421 39.315 A 47.285 47.285 0 0 0 58.001 31.701 A 53.706 53.706 0 0 0 57.967 29.78 Q 57.64 20.64 54.151 14.251 A 31.142 31.142 0 0 0 53.405 12.959 A 25.707 25.707 0 0 0 43.751 3.601 Q 37.201 0.001 29.001 0.001 A 35.206 35.206 0 0 0 27 0.057 A 29.375 29.375 0 0 0 14.351 3.601 A 25.229 25.229 0 0 0 9.638 6.94 A 27.776 27.776 0 0 0 3.901 14.251 Q 1.555 18.492 0.62 23.945 A 45.933 45.933 0 0 0 0.001 31.701 Q 0.001 42.101 3.801 49.151 A 30.668 30.668 0 0 0 4.287 50.018 A 25.435 25.435 0 0 0 14.201 59.801 A 28.593 28.593 0 0 0 19.488 62.029 A 32.144 32.144 0 0 0 29.001 63.401 A 35.99 35.99 0 0 0 32.3 63.252 A 29.271 29.271 0 0 0 43.851 59.801 A 24.804 24.804 0 0 0 48.377 56.615 A 26.943 26.943 0 0 0 54.201 49.151 A 26.89 26.89 0 0 0 55.209 47.069 Q 56.728 43.556 57.421 39.315 Z M 340.521 39.315 A 47.285 47.285 0 0 0 341.101 31.701 A 53.706 53.706 0 0 0 341.067 29.78 Q 340.74 20.64 337.251 14.251 A 31.142 31.142 0 0 0 336.505 12.959 A 25.707 25.707 0 0 0 326.851 3.601 Q 320.301 0.001 312.101 0.001 A 35.206 35.206 0 0 0 310.1 0.057 A 29.375 29.375 0 0 0 297.451 3.601 A 25.229 25.229 0 0 0 292.738 6.94 A 27.776 27.776 0 0 0 287.001 14.251 Q 284.655 18.492 283.72 23.945 A 45.933 45.933 0 0 0 283.101 31.701 Q 283.101 42.101 286.901 49.151 A 30.668 30.668 0 0 0 287.387 50.018 A 25.435 25.435 0 0 0 297.301 59.801 A 28.593 28.593 0 0 0 302.588 62.029 A 32.144 32.144 0 0 0 312.101 63.401 A 35.99 35.99 0 0 0 315.4 63.252 A 29.271 29.271 0 0 0 326.951 59.801 A 24.804 24.804 0 0 0 331.477 56.615 A 26.943 26.943 0 0 0 337.301 49.151 A 26.89 26.89 0 0 0 338.309 47.069 Q 339.828 43.556 340.521 39.315 Z M 72.401 41.101 L 72.401 32.901 L 80.501 32.901 L 80.501 40.401 A 22.936 22.936 0 0 0 80.935 45.015 Q 81.891 49.666 84.951 52.451 A 15.431 15.431 0 0 0 94.384 56.437 A 20.277 20.277 0 0 0 96.001 56.501 A 17.769 17.769 0 0 0 101.54 55.669 A 15.03 15.03 0 0 0 107.051 52.451 A 12.861 12.861 0 0 0 110.708 46.451 Q 111.327 44.362 111.463 41.844 A 26.871 26.871 0 0 0 111.501 40.401 L 111.501 32.901 L 119.701 32.901 L 119.701 41.101 A 27.67 27.67 0 0 1 119.055 47.204 A 21.76 21.76 0 0 1 116.951 52.851 Q 114.201 57.901 108.901 60.651 A 23.365 23.365 0 0 1 102.722 62.776 Q 100.01 63.323 96.898 63.391 A 40.889 40.889 0 0 1 96.001 63.401 A 34.156 34.156 0 0 1 90.064 62.911 Q 86.621 62.303 83.782 60.941 A 20.846 20.846 0 0 1 83.201 60.651 Q 77.901 57.901 75.151 52.851 A 22.396 22.396 0 0 1 72.697 45.32 A 29.09 29.09 0 0 1 72.401 41.101 Z M 188.301 32.001 L 186.101 34.001 L 165.601 62.601 A 4.909 4.909 0 0 1 165.229 62.677 Q 165.033 62.711 164.809 62.735 A 9.08 9.08 0 0 1 164.651 62.751 A 12.112 12.112 0 0 1 163.886 62.797 A 10.431 10.431 0 0 1 163.601 62.801 Q 161.891 62.801 160.766 62.07 A 3.821 3.821 0 0 1 160.401 61.801 A 3.191 3.191 0 0 1 159.211 59.495 A 4.054 4.054 0 0 1 159.201 59.201 Q 159.201 57.901 159.851 56.751 Q 160.49 55.619 161.469 54.341 A 28.989 28.989 0 0 1 161.501 54.301 L 180.201 29.801 L 182.901 27.301 L 201.901 1.001 Q 202.401 0.901 202.901 0.851 Q 203.401 0.801 204.001 0.801 A 7.021 7.021 0 0 1 205.183 0.894 Q 205.811 1.001 206.309 1.233 A 3.126 3.126 0 0 1 207.151 1.801 Q 208.201 2.801 208.201 4.301 A 4.105 4.105 0 0 1 208.027 5.457 A 5.692 5.692 0 0 1 207.651 6.401 A 15.032 15.032 0 0 1 206.708 8.016 A 17.534 17.534 0 0 1 206.301 8.601 Q 202.001 14.401 197.501 20.251 Q 193.001 26.101 188.301 32.001 Z M 199.601 59.401 L 181.501 33.201 L 180.101 32.601 L 159.601 4.701 A 6.554 6.554 0 0 1 160.619 2.623 A 6.125 6.125 0 0 1 161.301 1.851 A 4.083 4.083 0 0 1 163.63 0.752 A 5.616 5.616 0 0 1 164.401 0.701 A 4.46 4.46 0 0 1 165.791 0.909 A 3.778 3.778 0 0 1 167.101 1.651 A 10.444 10.444 0 0 1 167.94 2.469 Q 168.373 2.938 168.821 3.515 A 21.895 21.895 0 0 1 169.401 4.301 L 185.801 27.801 L 188.101 29.801 L 209.101 58.901 A 5.959 5.959 0 0 1 208.426 60.602 A 5.205 5.205 0 0 1 207.551 61.701 A 3.879 3.879 0 0 1 205.563 62.704 A 5.554 5.554 0 0 1 204.501 62.801 A 5.265 5.265 0 0 1 203.302 62.671 A 3.781 3.781 0 0 1 201.851 62.001 Q 200.801 61.201 199.601 59.401 Z M 49.701 31.701 A 40.211 40.211 0 0 0 49.107 24.557 Q 48.393 20.612 46.824 17.493 A 19.674 19.674 0 0 0 44.051 13.351 A 18.575 18.575 0 0 0 31.012 6.978 A 25.708 25.708 0 0 0 29.001 6.901 A 21.693 21.693 0 0 0 21.925 8.007 A 18.17 18.17 0 0 0 14.051 13.351 A 21.098 21.098 0 0 0 9.816 21.154 Q 8.401 25.745 8.401 31.701 A 40.561 40.561 0 0 0 8.989 38.844 Q 10.216 45.692 14.001 50.051 A 18.407 18.407 0 0 0 26.955 56.421 A 25.656 25.656 0 0 0 29.001 56.501 A 22.57 22.57 0 0 0 35.827 55.517 A 17.927 17.927 0 0 0 44.101 50.051 A 21.095 21.095 0 0 0 48.257 42.381 Q 49.701 37.744 49.701 31.701 Z M 332.801 31.701 A 40.211 40.211 0 0 0 332.207 24.557 Q 331.493 20.612 329.924 17.493 A 19.674 19.674 0 0 0 327.151 13.351 A 18.575 18.575 0 0 0 314.112 6.978 A 25.708 25.708 0 0 0 312.101 6.901 A 21.693 21.693 0 0 0 305.025 8.007 A 18.17 18.17 0 0 0 297.151 13.351 A 21.098 21.098 0 0 0 292.916 21.154 Q 291.501 25.745 291.501 31.701 A 40.561 40.561 0 0 0 292.089 38.844 Q 293.316 45.692 297.101 50.051 A 18.407 18.407 0 0 0 310.055 56.421 A 25.656 25.656 0 0 0 312.101 56.501 A 22.57 22.57 0 0 0 318.927 55.517 A 17.927 17.927 0 0 0 327.201 50.051 A 21.095 21.095 0 0 0 331.357 42.381 Q 332.801 37.744 332.801 31.701 Z M 137.501 58.901 L 137.501 25.801 L 145.601 25.801 L 145.601 61.901 A 5.938 5.938 0 0 1 145.28 62.017 Q 144.819 62.171 144.101 62.351 Q 143.101 62.601 141.901 62.601 A 8.588 8.588 0 0 1 140.691 62.521 Q 139.374 62.334 138.601 61.701 Q 137.501 60.801 137.501 58.901 Z M 119.701 4.501 L 119.701 37.001 L 111.501 37.001 L 111.501 1.501 A 5.41 5.41 0 0 1 111.825 1.384 Q 112.186 1.266 112.712 1.134 A 25.952 25.952 0 0 1 113.051 1.051 A 9.267 9.267 0 0 1 114.637 0.821 A 10.939 10.939 0 0 1 115.301 0.801 Q 117.501 0.801 118.601 1.651 Q 119.512 2.355 119.668 3.849 A 6.274 6.274 0 0 1 119.701 4.501 Z M 80.501 4.501 L 80.501 37.001 L 72.401 37.001 L 72.401 1.501 A 5.41 5.41 0 0 1 72.725 1.384 Q 73.086 1.266 73.612 1.134 A 25.952 25.952 0 0 1 73.951 1.051 A 9.267 9.267 0 0 1 75.537 0.821 A 10.939 10.939 0 0 1 76.201 0.801 A 9.1 9.1 0 0 1 77.347 0.868 Q 78.624 1.031 79.368 1.587 A 2.68 2.68 0 0 1 79.451 1.651 Q 80.284 2.325 80.456 3.724 A 6.374 6.374 0 0 1 80.501 4.501 Z M 36.101 67.901 L 27.601 62.101 L 35.301 59.701 A 352.786 352.786 0 0 0 38.319 61.407 Q 42.651 63.826 45.801 65.401 A 153.654 153.654 0 0 0 49.313 67.104 Q 50.928 67.861 52.392 68.493 A 88.056 88.056 0 0 0 53.351 68.901 Q 56.701 70.301 60.401 71.701 A 7.047 7.047 0 0 1 60.506 72.114 Q 60.599 72.534 60.601 72.841 A 2.056 2.056 0 0 1 60.601 72.851 L 60.601 73.701 A 5.095 5.095 0 0 1 60.432 75.046 A 3.772 3.772 0 0 1 59.451 76.751 A 3.746 3.746 0 0 1 57.75 77.711 Q 57.054 77.901 56.201 77.901 A 10.075 10.075 0 0 1 54.005 77.632 Q 51.797 77.136 48.923 75.724 A 42.407 42.407 0 0 1 47.801 75.151 Q 43.819 73.045 39.076 69.914 A 162.928 162.928 0 0 1 36.101 67.901 Z M 145.601 4.501 L 145.601 32.501 L 137.501 32.501 L 137.501 1.501 A 5.41 5.41 0 0 1 137.825 1.384 Q 138.186 1.266 138.712 1.134 A 25.952 25.952 0 0 1 139.051 1.051 A 9.267 9.267 0 0 1 140.637 0.821 A 10.939 10.939 0 0 1 141.301 0.801 A 9.1 9.1 0 0 1 142.447 0.868 Q 143.724 1.031 144.468 1.587 A 2.68 2.68 0 0 1 144.551 1.651 Q 145.384 2.325 145.556 3.724 A 6.374 6.374 0 0 1 145.601 4.501 Z" vectorEffect="non-scaling-stroke"/></g></svg>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'700'} color={'white'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={'blue.800'}
      color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader >Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Features</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
            {/* <Link href={'#'}>Status</Link> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link 
              href='https://facebook.com/quixgo'
              aria-label='btnFacebook'
              target='_blank'
              >Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            {/* <Link href={'#'}>Dribbble</Link> */}
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo text='name'/>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 QUIXGO. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}