import React from 'react'
import './addPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function AddPost() {
  return (
    <div className='addPost'> 
    <div className="addPostContainer">
        <div className="addPostTop">
            <img src="images/1.jpg" alt="" className="addPostPic" />
            <input placeholder='Whats in your mind' type="text" className="addPostInput" />
        </div> 

        <hr className="posthr" />

        <div className="addPostBottom">
            <div className="addPostOptions">
                <div className="addPostOption"> 
                    <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
                    <span className="addOptionText">Add photo/video</span>
                </div>
                <div className="addPostOption"> 
                    <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                    <span className="addOptionText">Add  Location</span>
                </div>
                <div className="addPostOption"> 
                    <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                    <span className="addOptionText">Add Tag</span>
                </div>
                <div className="addPostOption"> 
                    <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
                    <span className="addOptionText">Go Live</span>
                </div>
            </div>
     <button className="postButton">Post</button>

        </div>
    </div>
           
    </div>
  )
}

export default AddPost