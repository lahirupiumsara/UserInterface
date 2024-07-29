import React from 'react'
import './postPane.css'
import AddPost from '../AddPost/AddPost'
 import Post1 from '../Post/Post1'
import Post2 from '../Post/Post2'
import Post3 from '../Post/Post3'

function PostPane() {
  return (
    <div className=' PostPaneBox' > 
           
          <AddPost/>
         <Post1/>
         <Post2/>
         <Post3/>
         
          
    </div>
  )
}

export default PostPane