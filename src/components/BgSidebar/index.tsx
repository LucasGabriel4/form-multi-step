import React from 'react'
import styles from './BgSideBar.module.css'



function BgSidebar({children}:{children: React.ReactNode}) {
  return (
    <figure className={`relative flex justify-center gap-x-[20px] md:block bg-cover md:bg-contain min-h-[200px]  bg-no-repeat pt-[50px] md:p-[30px] w-[100%] md:w-[40%] ${styles.bgsidebar}`} >
        {children}
    </figure>
  )
} 

export default BgSidebar
