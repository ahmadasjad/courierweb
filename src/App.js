import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import logo from './assets/public/moveitlogo.png'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <main>
          <header>
              <img src={logo} alt="Move It Logo" />
          </header>
      </main>
    </ChakraProvider>
  );
}

export default App;
