import React from 'react'
import { useStorage } from '../../Hooks/useContext'



type StepProps = {
    step: number,
    stepOption: string
}

function Step({step,stepOption}:StepProps) {

   const {currentStep} = useStorage()
  return (
    <div className='flex md:items-center gap-x-3 md:mb-5'>
       <div className={`w-[30px] h-[30px] font-bold rounded-[50%] flex justify-center items-center border-white border-[1px] border-solid ${currentStep === step ? 'bg-lightBlue text-black' : 'text-white'}`}
       >{step}</div>
       <div className='hidden md:block'>
          <h4 className='uppercase text-[13px] text-coolGray'>Step {step}</h4>
          <h3 className='uppercase text-[14px] text-white font-medium'>{stepOption}</h3>
       </div>
    </div>
  )
}

export default Step
