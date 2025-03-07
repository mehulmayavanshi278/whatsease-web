import React from 'react'
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton';


function Navbar() {
  return (
    <div>
      <div className=''>
        <div className='flex flex-row justify-between items-center'>
            <div className=''>
                <div className='flex gap-x-3'>
                    <div className='w-[50px] h-[50px] relative'>
                        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/wplogo.svg' alt=''/>
                        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/wplogoinside.svg' alt=''/>
                        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/wplogoinside2.svg' alt=''/>
                    </div>
                    <div className='relative w-[180px]'>
                    <img className=' w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/whatseasetext.svg' alt=''/>
                    <img className='w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/whatseasetext2.svg' alt=''/>
                    </div>
                </div>

            </div>

            <div className=''>
            <ul className="m-0 p-0 flex justify-center items-start gap-x-6">
  <li className="relative font-semibold font-sans text-[20px]  text-white group cursor-pointer">
    Features
    <span className="absolute w-full opacity-0 left-0 bottom-0  h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>
  </li>
  <li className="relative font-semibold text-[20px]  text-white group cursor-pointer">
    Services
    <span className="absolute w-full opacity-0 left-0 bottom-0  h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>
  </li>
  <li className="relative font-semibold text-[20px]  text-white group cursor-pointer">
    Pricing
    <span className="absolute w-full opacity-0 left-0 bottom-0  h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>
  </li>
  <li className="relative font-semibold text-[20px]  text-white group cursor-pointer">
    FAQ’s
    <span className="absolute w-full opacity-0 left-0 bottom-0  h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>
  </li>
</ul>


            </div>

            <div className=''>



   <InteractiveHoverButton><p className='pt-sans-bold'> Get Started </p></InteractiveHoverButton>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
