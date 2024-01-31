import React, { useEffect, useRef, useState } from 'react'
import { useStorage } from '../../../Hooks/useContext'
import styles from './Pick.module.css'



type PickProps = {
    option: string,
    access: string,
    prices: {
        monthly: string,
        yearly: string
    }
}


function Pick({option, access, prices}:PickProps) {
    
    const {changeOptionPlan, complementsSelected, setComplementsSelected} = useStorage()
  
   
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        
        if(target.checked){
            setComplementsSelected([...complementsSelected, {complement: target.value, price: changeOptionPlan ? prices.yearly : prices.monthly}])
            
           
        }else{
            setComplementsSelected(complementsSelected.filter((item) => item.complement !== target.value))
          
        }
    }

  return (
    <div
        className={
            `
             px-4
             md:px-5
             py-[10px]
             rounded-lg
             border-lightGray
             border-solid 
             border-[1px] 
             flex 
             justify-between 
             items-center
             mb-5
             has-[:checked]:border-purplishBlue`}
                >

                    <div className='flex gap-x-4 md:gap-x-6 items-center'>
                        <div>
                            <input onChange={handleChange} checked={complementsSelected.some((item) => item.complement === option)} value={option} type='checkbox' className={styles.checkbox} id={option} />
                            <label  htmlFor={option} className={styles.check}></label>
                        </div>

                        <div>
                            <h3 className='text-marineblue font-bold'>{option}</h3>
                            <p className='text-coolGray font-medium text-[12px] md:text-[15px]'>{access}</p>
                        </div>

                    </div>

                    <span className='font-medium text-purplishBlue'>
                        {changeOptionPlan ? prices.yearly : prices.monthly}
                    </span>
                </div>
            
  )
}

export default Pick
