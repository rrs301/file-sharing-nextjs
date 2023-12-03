import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader({setToggleBar}) {
  return (
    <div className='flex p-5 border-b 
    items-center justify-between
    md:justify-end'>
        <AlignJustify className='md:hidden'
        onClick={()=>setToggleBar(true)}/>
        <Image src='/logo.svg'
        alt='logo'
         width={150} height={100} 
         className='md:hidden cursor-pointer'
          />
        <UserButton/>
    </div>
  )
}

export default TopHeader