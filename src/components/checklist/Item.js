import React from 'react'

function Item({title, id, removeItem}) {
  return(
    <li className='item'>
      <p>{title}</p>
      <button onClick = {removeItem}>&times;</button>
    </li>
  )
}

export default Item