import {extendTheme} from '@chakra-ui/react';
import colors from './colors.theme';
const theme=extendTheme({
    styles:{
        global:{
            body:{
                bg:'#8dd8dd',
                color:'#ffffff',
                fontsize:'14px',
                fontWeight:400,
            },
            p:{
                color:'#7f838A',
                marginBottom:'0px',
            }
        },
        fonts:{
            heading:'Roboto',
            body:'Roboto',
        },
        colors:{
            ...colors,
        },
    }
})
export default theme