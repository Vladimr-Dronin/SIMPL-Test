import React, {useState, useRef, useContext} from 'react'
import Select from '../Select'
import ItemChecklistHome from './ItemChecklistHome'
import Button from '../Button'
import ContextHome from './context/ContextHome'
import ContextEquipment from '../equipment/context/ContextEquipment'
import ContextChecklist from '../checklist/context/ContextChecklist'

function ListItemHome() {
  const [selector, setSelector] = useState('')
	const {saveItem} = useContext(ContextHome)
  const {equipment} = useContext(ContextEquipment)
  const {checkList} = useContext(ContextChecklist)

	let selectTitle = useRef((equipment.length !==0) ? equipment[0].name : null)
	let index = useRef(1)
  const date = useRef(new Date().toLocaleString())

  function openDropdown(e) {
    const target = e.target
    
    if(document.querySelector('.select').classList.contains('open')) {
      if(target.classList.contains('select__item')) {
        index.current = target.dataset.id
        selectTitle.current = equipment[index.current-1].name
        setSelector('')
      }else {
        setSelector('')
      }
    }else {
      setSelector('open')
    }
  }

  return (
    <div className = "item-home-component">
      <p className="date-tile ">Начало проверки: {date.current}</p>
      <Select selector={selector} openDropdown={openDropdown} selectList={equipment} selectTitle={selectTitle.current}/>
        <ul className="list">
            {checkList.length===0 ? null : checkList[index.current-1].check_list.map((item)=>{
              return <ItemChecklistHome item={item.requirement} key={item.id}/>
            })}
        </ul>
			<div className="select__button">
				<Button event={()=>checkList.length===0 ? null : saveItem(equipment[index.current-1].name, date.current)} title="Сохранить"/>
			</div>
    </div>
  )
}

export default ListItemHome