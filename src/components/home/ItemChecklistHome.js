import React from 'react'

function ItemChecklistHome({item}) {
  return (
    <li className="select__item">
      <span className="item-checklist">
        <input
          type ="checkbox"
          className="checklist__input" 
        />      
        {item}
      </span>
    </li>
  )
}
export default ItemChecklistHome