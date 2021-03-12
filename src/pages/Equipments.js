import React, {useState, useEffect, useContext} from 'react'
import Item from '../components/equipment/Item'
import Button from '../components/Button'
import ContextEquipment from '../components/equipment/context/ContextEquipment'

function Equipments(){
  const [valueFolder, setValueFolder] = useState('')
  const [valueCreate, setValueCreate] = useState('')
  const [, setI] = useState(0)
  const [arr, setArr] = useState([])
  const {equipment, addItem, removeItem} = useContext(ContextEquipment)
 
  useEffect(()=>{
    let newArr = []
    equipment.forEach((item)=>{
      if(item.name.toLocaleLowerCase().includes(valueFolder.toLocaleLowerCase())) {
        newArr.push(item)
      }
    })
    setArr(newArr)
  }, [valueFolder, equipment])

  function createItem() {
    addItem(valueCreate)
    setValueCreate('')
  }
  function removeTodo(id) {
    removeItem(id)
    setArr(equipment)
    setI(item=>item+1)
  }

  return (
    <div className="container">
      <div className="create__equipment">
      <input 
        value={valueCreate}
        onChange={(e)=>{setValueCreate(e.target.value)}} 
        className="inputCreate" 
        placeholder="Введите название оборудования"
      />
        <Button event={createItem} title = "Добавить"/>
      </div>
      <input 
        value={valueFolder} 
        onChange={(e)=>{setValueFolder(e.target.value)}} 
        className="inputFolder" 
        placeholder="Поиск"
      />
      <ul className="list">
        {arr.map((item, i)=>{
          return <Item title={item.name} removeItem={removeTodo.bind(null, item.id)} key={i}/>
        })}
      </ul>
    </div>
  )
}

export default Equipments