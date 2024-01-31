import React from 'react'
import { useStorage } from '../../../Hooks/useContext'



type CardPlanProps =  {
    planIcon:string,
    typePlan: string,
    plan: {
        mouthly: string,
        yearly: string
    },
    selected: boolean,
   
}

function CardPlan({planIcon, typePlan, plan,selected}: CardPlanProps) {
  
  const { setPlans, changeOptionPlan, activePlan,activePlanPrice} = useStorage()
  if(selected) activePlan.current = typePlan
  if(selected && changeOptionPlan) activePlanPrice.current = plan.yearly
  if(selected && !changeOptionPlan) activePlanPrice.current = plan.mouthly

 
  
  const chooseAPlan = (typePlan:string) => {
    setPlans((plans) => {
       return plans.map((plan) => {
       
          return {
             ...plan,
             selected: typePlan === plan.typePlan && true
          }
       })
    })

  }


  return (
    <div 
    className={`flex gap-5 md:gap-0 md:block p-[15px] w-full md:max-w-[125px] rounded-md border-[1px] border-solid border-lightGray cursor-pointer ${selected && 'border-[1px] border-purplishBlue border-solid'}`}
    onClick={() => chooseAPlan(typePlan)}
    >
       <figure className='mb-[0] md:mb-8 '>
            <img src={planIcon}/>
       </figure>
       <div>
         <h3 className='text-marineblue font-bold'>{typePlan}</h3>
        <h4 className='text-[15px] text-coolGray font-medium'>{changeOptionPlan ? plan.yearly : plan.mouthly}</h4>
        {changeOptionPlan && <h5  className='text-marineblue font-medium text-[12px]'>2 months free</h5>}  
       </div>
      
        
    </div>
  )
}

export default CardPlan
