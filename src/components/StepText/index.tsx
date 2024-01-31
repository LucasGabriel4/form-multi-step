import React from 'react'

function StepText({children}:{children: React.ReactNode}) {
  return (
    <p className='text-coolGray'>
       {children} 
    </p>
  )
}

export default StepText
