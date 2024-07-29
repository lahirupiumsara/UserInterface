import React from 'react'
import './post.css'

function Post() {
  return (
    <div className='post'> 
    <div className='postContanair'>
        <div className="postTop">
            <img src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" alt="error" className="postImage" />
            <span className="postUserName">Jorge Spensor</span>
            <span className="postTime">5 min ago</span>
        </div>
        <div className="postCenter">
            <div className="postCaption">
                hellow i am back again 😀

            </div>
            <img src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" alt="error" className="postedImage" />
        </div>
        <div className="postBottom"> 
            <div className="postBottomLeft">
                <img src="images/2.jpg" alt="" className="reactionPic" />
                <img src="images/3.jpg" alt="" className="reactionPic" />
                <img src="images/4.jpg" alt="" className="reactionPic" />
                <span className="likeCount">Rose and 201 others</span>
            </div>
            <div className="postBottomRight">
                <span className="commentCount">40 Comments</span>
            </div>
             
        </div>

    </div>
    </div>
  )
}

export default Post