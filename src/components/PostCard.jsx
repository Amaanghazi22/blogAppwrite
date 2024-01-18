import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, content, featuredimage}) {

  const shortContent = content.split(' ').slice(0, 5).join(' ');

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredimage)} alt={title}
                className='rounded-xl w-full h-48 object-cover' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
            <h4 className='text-sm text-gray-600'>
              {shortContent}...
            </h4>
        </div>
    </Link>
  )
}


export default PostCard