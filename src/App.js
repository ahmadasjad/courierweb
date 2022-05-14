import React,{useEffect,StrictMode} from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import {ChakraProvider} from '@chakra-ui/react';
import {Helmet,HelmetProvider} from "react-helmet-async";
import { 
  BrowserRouter
} from 'react-router-dom';
import axios from 'axios'
import WebRoutes from './routes/index.routes'
import theme from './theme/index.theme'
function App() {
 useEffect(()=>{

    axios.get("https://mak-courier-server.herokuapp.com/products/product-details/1")
    .then((res)=>{
        console.log(res)
    })
  })
  return (<StrictMode>
    <HelmetProvider>
    <ChakraProvider theme={theme}>
      
    <ColorModeScript />
   
       <Helmet>
                <meta charSet="utf-8" />
                <title>Courier GO</title>
                <meta name="keywords" content="courier,send parsel,dtdc price"/>
      </Helmet>
      <Provider store={store}>
      <BrowserRouter>
        <WebRoutes />
      </BrowserRouter>
      </Provider>
    </ChakraProvider> 
    </HelmetProvider>
    </StrictMode>
  );
}

export default App;
