import React from 'react'
import { useStorage } from '../../Hooks/useContext'



type ButtonProps = {
    textcolor?: string,
    bgcolor?: string,
    children: React.ReactNode
}

function Button({textcolor, bgcolor, children}:ButtonProps){

  const {setCurrentStep} = useStorage()

  const moveToTheNextStepOrGoBackOneStep:React.MouseEventHandler<HTMLButtonElement> = (event) => {
      const button = event.target

      if(button instanceof HTMLElement){
         if(button.innerText === 'Next Step'){
            setCurrentStep((step) => step + 1)
         }else if(button.innerText === 'Go back'){
            setCurrentStep((step) => step - 1)
         }
      }
  }


  return (
    <button  
    className='text-white font-medium bg-marineblue py-[10px] px-[20px] rounded-[7px]'
    style={{backgroundColor: `${bgcolor}`,color: `${textcolor}`}}
    onClick={moveToTheNextStepOrGoBackOneStep}>
       {children}
    </button>
  )
}

export default Button
