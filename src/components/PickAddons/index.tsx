import React from 'react'
import Button from '../Button'
import StepTitle from '../StepTitle'
import StepText from '../StepText'
import Checkbox from './checkbox'


function PickAddons() {
 
  return (
    <div className='w-[100%] md:w-[60%] md:max-w-[435px] flex-col justify-center md:block pt-[0] md:pt-[30px]'>
    <div className='w-full max-w-[350px] md:max-w-[435px] rounded-[10px] md:rounded-[0] p-[20px] md:p-[0] bg-white m-auto  relative top-[-80px] md:static shadow-lg md:shadow-none'>
        <StepTitle>
           Pick add-ons
        </StepTitle>
        <StepText>
           Add-ons help enhance your gaming experience
        </StepText>
          
          <div className='mt-8'>
                <Checkbox/>
          </div>
    </div>

    <div className='flex justify-between mt-0 md:mt-32 p-5' >
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

export default PickAddons
