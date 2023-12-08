import React from 'react'
import NavBar from './components/NavBar'
import { Button, ButtonGroup } from '@chakra-ui/react'
import ItenListContainer from './components/ItenListContainer'

const App = () => {
  
  return (
    <div>
      <NavBar />
      <Button>Agregar</Button>
      <ItenListContainer greeting={"Bienvenidos a mi Ecomerce"} />
       
    </div>      
   
  )
}
 export default App

