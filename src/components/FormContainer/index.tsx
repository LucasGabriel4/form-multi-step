import React from 'react'

function FormContainer({children}:{children: React.ReactNode}) {
  return (
    <div className='w-full max-w-[900px] min-h-[100vh] md:min-h-[auto] p-[0] md:p-[20px]  shadow-lg shadow-lightGray rounded-[0] md:rounded-[10px] flex flex-col md:flex-row gap-x-5'>
       {children}
    </div>
  )
}

export default FormContainer
