import React from 'react'

import {Menu,MenuButton,MenuList,MenuItem,
  IconButton,Tooltip
} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';
import {MdMenu} from 'react-icons/md';
import menus from './menu.config';
const MobileMenu = () => {
    return (
        <Menu>
        <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdMenu />}
            variant="outline"
        />
        <MenuList>
            {
                    menus.map((menu)=>{
                        return <MenuItem color={'black'}><NavLink to={menu.path}
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
                        </MenuItem>
                })
                }
        
        </MenuList>
        </Menu>
    )
}

export default MobileMenu
