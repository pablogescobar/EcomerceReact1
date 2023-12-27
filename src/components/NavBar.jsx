import React from 'react'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div>
        <Flex align='center' bg='#FF108A'>
          <div>
            <Link to={"/"}>
            <Box p='4' >
            Inicio
            </Box>
            
            </Link>
          </div>
            <Spacer />
            <Menu>
                <MenuButton>
                Categorías
                </MenuButton>
                <MenuList>
                    <Link to={"/categoria/Adidas"}>
                    <MenuItem>Categoría A</MenuItem>
                    </Link>
                    <Link to={"/categoria/Gola"}>
                    <MenuItem>Categoría B</MenuItem>
                    </Link>
                    <Link to={"/categoria/Dc"}>
                    <MenuItem>Categoría C</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='4' >
            <Link to={"/cart"}>
            <CartWidget/>
            </Link>           
            </Box>
        </Flex>
    </div>
    </>
  )
}

export default NavBar
