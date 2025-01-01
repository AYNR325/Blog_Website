import React from 'react'
import blogLogo from '../assets/blog_logo.png'
function Logo({width='100px'}) {
  return (
    <div className='flex items-center gap-3'>
      <img src={blogLogo} alt="" className='md:w-[50px] w-[35px]'/>
      <p className='font-bold font-serif md:text-3xl text-base text-black'>Blogis</p>
    </div>
  )
}

export default Logo
