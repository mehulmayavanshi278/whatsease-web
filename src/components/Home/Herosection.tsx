import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton';

function Herosection() {
  return (
    <div className='pt-sans-bold'>
      <div className='flex  flex-col items-center mt-[100px] font-sans'>
        <h1 className='text-8xl text-white font-semibold pt-sans-bold'>automate your</h1>
        <div className='flex flex-row pt-sans-bold'>
        <div className='w-[100px] relative top-[73px]'>
             <img className='absolute top-[0px]  right-0' src='/svg/roundeicon1.svg' alt=''/>
             <img className='absolute top-[0px] right-[2px]' src='/svg/roundicon2.svg' alt=''/>
             <img className='w-[70px] absolute top-[00px] right-[20px]' src='/svg/roundicon3.svg' alt=''/>
            </div>    
        <h1 className='text-8xl text-white'> <i className='text-black'>events</i> <span> and save</span></h1>
        </div>
    
        <h1 className='text-8xl text-white pb-3'>your time.</h1>
        <p className="text-white text-2xl text-center mt-5 pt-sans-regular">
  - host your events, build engaging 
  communication <br /> channels and make your
  next event unforgettable, <br /> powered via WhatsApp.
</p>

<div className='mt-6'>
{/* <div className="group md:w-[250px] flex justify-end gap-x-1">
  <div className="flex items-center justify-center border-white border-[3px] rounded-[20px] px-[20px] bg-transparent hover:bg-amber-950 transition-all duration-400 ease-in-out group-hover:pr-[20px] group-hover:pl-[30px] overflow-hidden relative">
    <p className="px-4 py-3 text-white group-hover:text-white transition-colors duration-300">Book Your Demo</p>
    
 
    <div className="w-[10px] h-[10px] rounded-full bg-white group-hover:opacity-0 group-hover:-translate-x-4 transition-all duration-400 absolute right-[20px]"></div>
    
 
    <div className="absolute right-[10px] opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
      <div className=''>
      <ArrowRightAltIcon sx={{color:'white'}}/>
      </div>
    
    </div>
  </div>
</div> */}

<InteractiveHoverButton><p className='pt-sans-bold'>Book Your Demo</p></InteractiveHoverButton>
</div>

      </div>
    </div>
  )
}

export default Herosection
