import React from 'react'
import'./home.css'
import NavBar from '../../Components/Navigation/NavBar'
import LeftPane from '../../Components/LeftPane/LeftPane'
import PostPane from '../../Components/PostPane/PostPane'
import RightPane from '../../Components/RightPane/RightPane'
 
 
 

function Home() {
  return (
    <div>
         <NavBar/>
         
         <div className="bottomContainer"> 
         <LeftPane/>
         <PostPane/>
         <RightPane/>
         </div>

         
        

     
         
        
    </div>
  )
}

export default Home