import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box,Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>

<Flex>
  <Box p='4' bg='red.400'>
  MyEcomerce
  </Box>
 

  <Menu>
  <Spacer />
  <MenuButton>
    Categoria
  </MenuButton>
  <Spacer />
  <MenuList>
    <MenuItem>Categoria 1</MenuItem>
    <MenuItem>Categoria 2</MenuItem>
    
  </MenuList>
  
</Menu>






  <Box p='4' bg='green.400'>
  <CartWidget/>
  </Box>
</Flex>

        
        
    </div>
  )
}

export default NavBar