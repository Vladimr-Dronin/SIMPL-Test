import React, {useState, useContext} from 'react'
import ContextEquipment from './context/ContextEquipment'
import ContextChecklist from '../checklist/context/ContextChecklist'

function EquipmentList({children}) {
  const [equipment, setEquipment] = useState([
    {
      "id": 1,
      "name": "Котлы"
    },
    {
      "id": 2,
      "name": "Сосуды под давлением"
    },
    {
      "id": 3,
      "name": "Трубопроводы"
    }
  ])
  const {checkList ,setChecklist} = useContext(ContextChecklist)

  function addItem(name) {
    setEquipment(equipment.concat([
      {
        "id": equipment.length + 1,
        "name": name
      }
    ]))
    setChecklist(checkList.concat([
      {
        "equipment_id": checkList.length+1,
        "check_list": []
      }
    ]))
  }

  function removeItem(id) {
    for(let i=0; i < equipment.length; i++) {
			if(equipment[i].id === id) {
				equipment.splice(i, 1)
				i--
			}else{
				equipment[i].id = i + 1
			}
		}
    for(let i=0; i < checkList.length; i++) {
			if(checkList[i].equipment_id === id) {
				checkList.splice(i, 1)
				i--
			}else{
				checkList[i].equipment_id = i + 1
			}
		}  
    setEquipment(equipment)
    setChecklist(checkList)
  }

  return (
    <ContextEquipment.Provider value={{
      equipment,
      setEquipment,
      addItem,
      removeItem
    }}>
      {children}
    </ContextEquipment.Provider>
  )
}

export default EquipmentList