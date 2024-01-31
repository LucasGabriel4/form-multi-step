import React, { useState } from 'react'
import Button from '../Button'
import StepTitle from '../StepTitle'
import StepText from '../StepText'
import CardPlan from './cardPlan'
import Switch from './Switch'
import { useStorage } from '../../Hooks/useContext'





function SelectYourPlan() {
  const {plans, changeOptionPlan} = useStorage()

   
  return (
    <div className='w-[100%] md:w-[60%] md:max-w-[435px] flex-col justify-center md:flex-none md:justify-start pt-[0] md:pt-[30px]'>
    <div className='w-full max-w-[350px] md:max-w-[435px] rounded-[10px] md:rounded-[0] p-[20px] md:p-[0] bg-white m-auto  relative top-[-80px] md:static shadow-lg md:shadow-none'>
        <StepTitle>
            Select your plan
        </StepTitle>
        <StepText>
            You have the option of monthly or yearly billing
        </StepText>
         
         <div className='flex flex-col md:flex-row gap-x-0 md:gap-x-5 gap-y-3 md:gap-y-0 mt-5 justify-center'>
             {plans.map(({id,planIcon, typePlan, plan,selected}) => {
                return <CardPlan 
                   key={id}
                   planIcon={planIcon} 
                   typePlan={typePlan} 
                   plan={plan} 
                   selected={selected}
                   />
             })}
         </div>
        <div className='flex items-center gap-x-5 mt-[40px] justify-center'>
           <span className={`block  font-medium ${!changeOptionPlan ? 'text-marineblue' : 'text-coolGray'}`}>
             Monthly
           </span>
           <Switch/>
           <span className={`block  font-medium ${changeOptionPlan ? 'text-marineblue' : 'text-coolGray'}`}>
             Yearly
           </span>
        </div>
      
    </div>

    <div className='flex justify-between mt-0 md:mt-32 p-5'>
            <Button bgcolor='transparent' textcolor='hsl(231, 11%, 63%)'>
                Go back
            </Button>
            <Button>
                Next Step
            </Button>

        </div>

</div>
  )
}

export default SelectYourPlan
