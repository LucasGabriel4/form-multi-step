import React from 'react'
import Button from '../Button'
import StepTitle from '../StepTitle'
import StepText from '../StepText'
import { useStorage } from '../../Hooks/useContext'

function FinishingUp() {
  const {activePlan, changeOptionPlan, complementsSelected,activePlanPrice,setCurrentStep} = useStorage()
  const chosenPlan = changeOptionPlan ? 'yearly' : 'monthly'
  

  const changePlanActive: React.MouseEventHandler<HTMLAnchorElement>  = (event) => {
     event.preventDefault()
     setCurrentStep(2)
  }

 
  return (
    <div className='w-[100%] md:w-[60%] md:max-w-[435px] flex-col justify-center md:block pt-[0] md:pt-[30px]'>
    <div className='w-full max-w-[350px] md:max-w-[435px] rounded-[10px] md:rounded-[0] p-[20px] md:p-[0] bg-white m-auto  relative top-[-80px] md:static shadow-lg md:shadow-none'>
        <StepTitle>
           Finishing up
        </StepTitle>
        <StepText>
           Double-check everything looks OK before confirming
        </StepText>
        
        <div className='mt-10'>
            <div className='flex justify-between mb-8'>
                <div>
                    <h3 className='text-marineblue font-bold'>{activePlan.current}({chosenPlan})</h3>
                     <a href='' onClick={changePlanActive} className='decoration-1 underline text-cooGray'>Change</a>
                </div>
                 <span className='text-marineblue font-bold'>{activePlanPrice.current}</span>
            </div>

            {complementsSelected.length > 0 && complementsSelected.map(({complement, price}) => {
                return  <div key={complement} className='flex justify-between mb-3'>
                <span>{complement}</span>
                <span className='font-medium text-marineblue'>{price}</span>
             </div>

            })}
     

            <div className='flex justify-between mt-[50px]'>
                 <span>Total (per month)</span>
                 <span className='font-bold text-purplishBlue'></span>
            </div>

        </div>
    </div>

    <div className='flex justify-between mt-20 md:mt-44 p-5'>
            <Button bgcolor='transparent' textcolor='hsl(231, 11%, 63%)'>
                Go back
            </Button>
            <Button bgcolor='hsl(243, 100%, 62%)' textcolor='white'>
                Confirm
            </Button>

        </div>

</div>
  )
}

export default FinishingUp
