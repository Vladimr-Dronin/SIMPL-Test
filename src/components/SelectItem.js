import React from 'react'

function SelectItem({title, id}) {
  return (
    <li className="select__item" data-id={id}>{title}</li>
  )
}

export default SelectItem