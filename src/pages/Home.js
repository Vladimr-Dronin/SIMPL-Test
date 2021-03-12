import React, {useState, useContext} from 'react'
import ListCaseHome from '../components/home/ListCaseHome'
import ListItemHome from '../components/home/ListItemHome'
import ContextHome from '../components/home/context/ContextHome'
import ContextArr from '../components/home/context/ContextArr'

function Home(){
  const [open, setOpen] = useState(false)
  const {arr, setArr} = useContext(ContextArr)

  const show = ()=> {
    setOpen(true)
  }
  const saveItem = (name, date)=> {
    const arrInput = document.querySelectorAll('input')
    let count = 0

		arrInput.forEach((item)=>{
			if(item.checked) {
				count++	
			}
		})
    setArr(arr.concat([
      {
        date,
        name,
        summa: (!arrInput.length ? 0 : count/arrInput.length*100).toFixed()
      }
    ]))
    setOpen(false)
  }

  return (
    <ContextHome.Provider value={{
      saveItem,
      show,
      arr
      }}>
      <div className="container">
        {open ? <ListItemHome/> : <ListCaseHome/>}
     </div>
    </ContextHome.Provider>
  )
}

export default Home