import React from 'react'
import StepTitle from '../StepTitle'
import StepText from '../StepText'
import Button from '../Button'




function PersonalInfo() {
    return (
        <div className='w-[100%] md:w-[60%]  md:max-w-[435px] flex-col justify-center md:block pt-[0] md:pt-[30px]'>
            <div className='w-full max-w-[350px] md:max-w-[435px] rounded-[10px] md:rounded-[0] p-[20px] md:p-[0] bg-white m-auto  relative top-[-80px] md:static shadow-lg md:shadow-none'>
                <StepTitle>
                    Personal info
                </StepTitle>
                <StepText>
                    Please provide your name, email address, and phone number.
                </StepText>
                <form className='mt-7' >
                    <div>
                        <label htmlFor='name' className='block mb-2 text-marineblue font-medium'>Name</label>
                        <input
                            className='w-full rounded-lg border-lightGray border-solid border-[1px] pl-3 py-2 text-coolGray font-medium'
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Type your name' />
                    </div>

                    <div className='mt-3 md:mt-5'>
                        <label htmlFor='name' className='block mb-2 text-marineblue font-medium'>Email Address</label>
                        <input
                            className='w-full  rounded-lg border-lightGray border-solid border-[1px] pl-3 py-2 text-coolGray font-medium'
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Type your e-mail' />
                    </div>

                    <div className='mt-3 md:mt-5'>
                        <label htmlFor='name' className='block mb-2 text-marineblue font-medium'>Phone Number</label>
                        <input
                            className='w-full  rounded-lg border-lightGray border-solid border-[1px] pl-3 py-2 text-coolGray font-medium'
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Type your Phone'/>
                  </div>

                </form>
            </div>
            <div className='flex justify-end  mt-0 md:mt-12 p-5'>
                    <Button>
                        Next Step
                    </Button>

                </div>

        </div>
    )
}

export default PersonalInfo
