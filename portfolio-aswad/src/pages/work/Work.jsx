import React from 'react'
import WorkText from '../../components/work/WorkText'
import Circle from '../../components/circle/Circle'


const Work = () => {
  return (
    <div className='bg-black text-white h-screen w-full pl-35 pt-20 flex p-5 pb-15'>
        <WorkText />
        <Circle />
    </div>
  )
}

export default Work