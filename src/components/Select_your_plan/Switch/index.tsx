import React from 'react'
import './Switch.css'
import { useStorage } from '../../../Hooks/useContext'



function Switch() {
  const {setOptionChangePlan, changeOptionPlan} = useStorage()
  
  return (
    <>
     <input onChange={() => setOptionChangePlan((changeOptionPlan) => !changeOptionPlan)} type='checkbox' id='switch' className='checkbox' defaultChecked={changeOptionPlan}/>
     <label  htmlFor='switch' className='switch'></label>
    </>
      
  )
}

export default Switch
