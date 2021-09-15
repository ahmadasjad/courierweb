import React,{useEffect} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {Helmet} from "react-helmet";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios'
import Routes from './routes/index.routes'
import theme from './theme/index.theme'
function App() {
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
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
