import React, {useState} from 'react'
import ArrContext from './context/ContextArr'



const ArrState = ({children})=>{
  const [arr, setArr] = useState([])

  return (
    <ArrContext.Provider value={{
      arr, setArr
    }}>
      {children }
    </ArrContext.Provider>
  )
}

export default ArrState