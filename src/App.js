import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {Helmet} from "react-helmet";
import logo from './assets/public/moveitlogo.png'


function App() {
  return (
    <ChakraProvider theme={theme}>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Courier GO</title>
                <meta name="keywords" content="courier,send parsel,dtdc price"/>
            </Helmet>
      <main>
          <header>
              <img src={logo} alt="Move It Logo" />
          </header>
      </main>
    </ChakraProvider>
  );
}

export default App;
