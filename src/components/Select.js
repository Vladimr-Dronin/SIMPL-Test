import React, {useContext} from 'react'
import ContextEquipment from './equipment/context/ContextEquipment'
import SelectItem from './SelectItem'

function Select({selector, openDropdown, selectTitle}) {
  const {equipment} = useContext(ContextEquipment)
  return (
    <div className={`select ${selector}`} onClick={openDropdown}>
        <div className = "select__input">
          <p className = "select-input__title">{selectTitle}</p>
          <i className="fa fa-chevron-down"></i>
        </div>
        <div className="select__dropdown">
          <ul className="select__list">
            {equipment.map((item)=>{
              return <SelectItem title={item.name} id={item.id} key={item.id}/>
            })}
          </ul>
        </div>
      </div>
  )
}

export default Select