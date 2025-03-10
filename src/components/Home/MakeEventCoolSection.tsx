import React from 'react'
import {ExternalLink} from 'lucide-react'

function MakeEventCoolSection() {
  return (
    <div>
<div className=" mt-[100px] h-screen bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%] px-28 py-10 pt-[80px]">
      <div className="flex flex-col justify-center items-center relative">
  <h1 className="pt-sans-bold text-black text-6xl text-center">
    <i>how does</i>
  </h1>
  <div className="relative inline-block">
    <h1 className="pt-sans-bold text-[#13D960] text-7xl text-center relative">
      whatsease make events cool?
    </h1>
    <div className="absolute top-[-50px] right-[-100px] w-[90px]">
      <img src="/svg/coolEvent.svg" alt="" />
    </div>
  </div>
</div>


<div className='grid grid-cols-12 gap-8 mt-20 relative'>
    <div className='col-span-7  min-h-[100px] bg-[#04B851] relative rounded-4xl p-8 pb-0'>
    <div className='absolute top-0 right-2'>
                <img src='/svg/arrowCool.svg' alt=''/>
            </div>

           <div className='relative'>
            <div className='text-white'>
                <h1 className='text-4xl font-semibold pt-sans-bold'>book your tickets...<br></br>
                smoooooothly!</h1>
            </div>

            <div className='mt-4'>

            </div>
              <div className='flex flex-row gap-x-2'>
                {
                    Array.from({length: 16}).map((_ , id)=>{
                      return(
                        <>
                                        <div key={id} className='w-[15px] h-[15px] relative'>
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/rightCool1.svg' alt=''/>
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/rightCool2.svg' alt=''/>
                </div></>
                      )
                    })
                }

              </div>
              <div className='grid grid-cols-2'>
              <div className=''>
                <div className=''>
                <p className='mt-5 pt-sans-bold text-2xl text-white font-pt-sans'>
                Provide seamless indoor navigation, integrated payments, and versatile event support for smooth customer experiences.
                </p>
                <div className='min-h-[300px] left-[40px] relative'>
                   <div className='w-[250px] mt absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 flex flex-col justify-end'>
                   <div className='absolute right-[-50px] top-[-50px]'>
                        <img src='/svg/Powerby.svg' alt=''/>
                      </div>
                    <h1 className='text-white pt-sans-bold text-5xl'><i>powered by</i>

                    </h1>
                    <h1 className='text-white pt-sans-bold text-5xl'><i>whatsapp</i></h1>
                   </div>
                </div>
                </div>

              </div>
              <div className='flex flex-col justify-end'>
              <div className=''>
                <img className='w-[490px]' src='/svg/whatsEaseCool1.svg' alt=''/>
            </div>
              </div>
   
              </div>


  
           </div>
    </div>
    <div className='col-span-5  min-h-[100px] overflow-hidden bg-[#04B851] rounded-4xl relative p-8'>
    <div className='absolute top-0 right-2'>
                <img src='/svg/arrowCool.svg' alt=''/>
            </div>

            <div className=''>
            <div className='text-white'>
                <h1 className='text-3xl font-semibold pt-sans-bold'>have a question?<br></br>
                get quick answers.</h1>
            </div>

            <div className='mt-4'>

            </div>
              <div className='flex flex-row gap-x-2'>
                {
                    Array.from({length: 16}).map((_ , id)=>{
                      return(
                        <>
                                        <div key={id} className='w-[15px] h-[15px] relative'>
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/rightCool1.svg' alt=''/>
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/rightCool2.svg' alt=''/>
                </div></>
                      )
                    })
                }

              </div>
              <div className='text-2xl mt-5 pt-sans-bold text-white'>
                <p>powered by whatsapp, give instantaneous answers and queries, right from your own chatbot with a simple Hi!</p>
              </div>
            </div>
            <div className='absolute bottom-0 overflow-hidden'>
                <img src='/svg/quePeople.svg' alt=''/>
            </div>
    </div>
    <div className='col-span-5  min-h-[100px] bg-[#04B851] rounded-4xl relative px-2 pt-8 pb-5'>
    <div className='absolute top-0 right-2'>
                <img src='/svg/arrowCool.svg' alt=''/>
            </div>
      <div className=''>
        <div className=''>
          <div className='flex flex-row gap-x-1 items-end'>
          <div className='w-[40px] h-[40px] relative'>
                        <img className='w-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/wplogo.svg' alt=''/>
                        <img className='w-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/wplogoinside.svg' alt=''/>
                        <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/svg/wplogoinside2.svg' alt=''/>
                    </div>
                    <div className='w-[270px]  overflow-hidden bg-[#04B851]  rounded-md'>
                      <div className='bg-white rounded-md'>

                     
                      <div className='p-2'>
                        <img className='rounded-md w-full object-cover' src='/svg/sale.svg' alt=''/>
                      </div>
                      <div className='p-2 pt-0'>
                      <p className='pt-sans-bold mt-2'>Valentine's Day Sale Alert! 💝</p>
                      <p className='pt-sans-normal mt-3'><span className='pt-sans-bold'> Dear Ananya, </span> this is an exclusive announcement!</p>

                      <p className='mt-2'>From <span className='pt-sans-bold'> 8th till 15th February </span> , Enjoy special discounts <span className='pt-sans-bold'> up to 75%  </span> on a wide range of gifts and make your <span className='pt-sans-bold'> loved ones feel special </span>😊🥰.</p>
                      <p className='mt-3 pt-sans-normal'>RSVP FROM HERE TO VISIT—We will be waiting for your response! 🚀</p>
                      </div>
                      </div>
                      <div className='h-[10px] bg-[#04B851]'>

                      </div>
                      <div className='bg-[#04B851] overflow-hidden'>
                      <div className='flex flex-row justify-center bg-white items-center text-blue-400 gap-x-2 py-2 rounded-md'>
                        <ExternalLink/>
                        RSVP for the invite!
                      </div>
                      </div>
                     


                    </div>

          </div>
          
        </div>
        <div className='flex flex-row mt-2 justify-end'>
        <div className='flex items-end gap-x-2'>
                     <div className=''>
                      <img src='/svg/wpfileinside.svg' alt=''/>
                     </div>
                     <div className=''>
                      <img src='/svg/usermsgicon.svg' alt=''/>
                     </div>
                    </div>
        </div>

        <div className=''>
          <h1>stay in touch with 
          your attendees. 24x7, 365!</h1>
          
        </div>

      </div>
    </div>
    <div className='col-span-7  min-h-[100px] bg-[#04B851] rounded-4xl'></div>
</div>

      </div>
    </div>
  )
}

export default MakeEventCoolSection
