import React, {useState, useContext, useRef} from 'react'
import Select from '../components/Select'
import Item from '../components/checklist/Item'
import Button from '../components/Button'
import ContextEquipment from '../components/equipment/context/ContextEquipment'
import ContextChecklist from '../components/checklist/context/ContextChecklist'

function Checklists() {
  const [selector, setSelector] = useState('')
  const [valueCreate, setValueCreate] = useState('')
  const {equipment} = useContext(ContextEquipment)
  const {checkList, addItem, removeList, removeItem} = useContext(ContextChecklist)
  const [, setI] = useState(0)

  let selectTitle = useRef((equipment.length !==0) ? equipment[0].name : null)
	let index = useRef(1)

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
 function createItem() {
  addItem(valueCreate, index.current-1)
  setValueCreate('')
 }

 function buttonRemoveList() {
   if(equipment.length) {
    removeList(index.current-1)
    setI(item=>item+1)
   }

 }
 function buttonRemoveItem(item) {
  removeItem(index.current-1, item.id)
  setI(item=>item+1)
 }

  return(
    <div className="container">
      <Select selector={selector} openDropdown={openDropdown} selectTitle={selectTitle.current}/>
      <div className="create__equipment">
      <input 
        value={valueCreate}
        onChange={(e)=>{setValueCreate(e.target.value)}} 
        className="inputCreate" 
        placeholder="Введите требование"
      />
        <Button event={createItem} title = "Добавить"/>
      </div>
      <Button event={buttonRemoveList} title = "Удалить чек-лист"/>
      <ul className="list">
            {checkList.length===0 ? null : checkList[index.current-1].check_list.map((item)=>{
              return <Item 
                title={item.requirement} 
                id={item.id} 
                removeItem={buttonRemoveItem.bind(null, item)} 
                key={item.id}
              />
            })}
        </ul>
    </div>
  )
}

export default Checklists