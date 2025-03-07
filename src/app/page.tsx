import Herosection from '@/components/Home/Herosection'
import Navbar from '@/components/Home/Navbar'
import WelcomeEraSection from '@/components/Home/WelcomeEraSection'
import WpscreenSection from '@/components/Home/WpscreenSection'
import React from 'react'

function page() {
  return (
    <div className='font-sans'>
      <div className=' px-28 py-6 min-h-screen bg-[#04B851] pb-[130px]'>
      <Navbar/>
       <Herosection/>
      </div>
      <div className='px-28'>
      <WpscreenSection/>
      <WelcomeEraSection/>
      </div>
      
    </div>
  )
}

export default page
