import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id,title,featuredimage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-[#B09E99]  rounded-xl p-4  ">
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredimage)} alt={title}  
                className='rounded-xl md:w-full md:h-[150px] object-contain' 
                />
            </div>
            <h2 className='text-xl font-bold text-white'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
