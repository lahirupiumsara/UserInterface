import React from 'react'
import './postPane.css'
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'

function PostPane() {
  return (
    <div className=' PostPaneBox' > 
           
          <AddPost/>
          <Post/>
    </div>
  )
}

export default PostPane