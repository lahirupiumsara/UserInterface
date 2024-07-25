import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import './navBar.css'

function NavBar() {
  return (
     <div className="navBarBox">

        <div className="navBarLeft">
            <span className="logo">facebook</span>
        </div>

        <div className="navBarCenter"> 
             <div className="seachBarBox">
               <SearchIcon className='searchIcon'/>
               <input placeholder='search for your friends' className="searchInput" />
               </div> 
         </div>

        <div className="navBarRight">
            <div className="navBarLinks">
                  <span className="navBarLink">HomePage</span>
                  <span className="navBarLink">Profle</span>
            </div>
            <div className="navBarIcons">
               <div className="navBarIcon">
                  <PersonIcon/>
                  <span className="iconTag">5</span>
               </div>
               <div className="navBarIcon">
                  <MessageIcon/>
                  <span className="iconTag">3</span>
               </div>
               <div className="navBarIcon">
                  <SettingsIcon/>
                  <span className="iconTag">2</span>
               </div>
              
              <div className="pic"></div>
              <img src="/images/1.jpg" alt="" className="profilePicImage" />

            </div>

        </div>
        
        
     </div>
  )
}

export default NavBar