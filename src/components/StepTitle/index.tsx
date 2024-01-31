import React from 'react'

function StepTitle({children}:{children: React.ReactNode}) {
  return (
    <h1 className='text-marineblue text-[30px] font-bold'>
        {children}
    </h1>
  )
}

export default StepTitle
