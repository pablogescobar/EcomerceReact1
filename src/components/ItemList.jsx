import React from 'react'
import Items from './Items'

const ItemList = ({productos}) => {
    
  return (
    <div>
      {
        productos.map((p) => {
          return(
            <div>
              
             <Items
             key={p.id}
             titulo = {p.titulo}
             id={p.id}
             />
            </div>
          )
        })
      }
    </div>
  )
}

export default ItemList
