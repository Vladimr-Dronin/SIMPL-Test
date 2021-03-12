import React, {useContext} from 'react'
import Button from '../Button'
import ItemList from './ItemList'
import ContextHome from './context/ContextHome'


function ListCaseHome() {
  const {show, arr} = useContext(ContextHome)

  const renderItem=()=>{
    return arr.map((item, i)=>{
      return <ItemList date={item.date} name={item.name} summa={item.summa} key={i}/>
    })
  }

  return (
    <div>
      <Button event={show} title="Создать"/>
      <ul className="list-case">
        {arr.length ? renderItem() : <p className="no-todos">Записей нет</p>}
      </ul>
    </div>
  )
}

export default ListCaseHome