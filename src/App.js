import React,{useEffect} from 'react';
// import { useLocation } from 'react-router-dom'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {Helmet} from "react-helmet";
import logo from './assets/public/moveitlogo.png'
import axios from 'axios'


function App() {
 const location = window.location.hostname;
  console.log(location);
  useEffect(()=>{

    axios.get("https://mak-courier-server.herokuapp.com/products/product-details/1")
    .then((res)=>{
        console.log(res)
    })
  })
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
