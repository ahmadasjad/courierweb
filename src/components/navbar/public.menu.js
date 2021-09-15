import React from 'react'
import {Tooltip,HStack
} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import menus from './menu.config';
// import {MdMenu} from 'react-icons/md'
const PublicMenu = () => {
    return (<HStack mr="20px" pr="20px" mt="20px" spacing={10}>
                {
                    menus.map((menu)=>{
                        return <NavLink to={menu.path}
                                key={menu.label}
                                exact
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                        >
                                <Tooltip>
                                    {menu.label}
                                </Tooltip>
                        </NavLink>
                    })
                }
       
    </HStack>
    
    )
}

export default PublicMenu
