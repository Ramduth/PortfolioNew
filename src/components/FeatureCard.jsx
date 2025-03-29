import React from 'react'
import { VscDiffAdded } from "react-icons/vsc";

function FeatureCard() {
  return (
    <div className=' border bg-black border-red-200 w-[312px] h-[182.46px] rounded-[8px] p-4 flex flex-col gap-14'>
      <div>
      <VscDiffAdded className='w-[32.46px] h-[32.46px] text-white text-opacity-80'/>
        </div>
        <div className='flex flex-col  gap0-2'>
            <h1 className='text-[24px] font-Manrope font-medium text-white text-opacity-80'>Mobile SDK</h1>
            <p className='font-Manrope text-sm text-white text-opacity-80'>Seamless integration into mobile apps.</p>
        </div>
    </div>
  )
}

export default FeatureCard
