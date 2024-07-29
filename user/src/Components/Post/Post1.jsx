import React from 'react'
import './post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ReplyIcon from '@mui/icons-material/Reply';
 
 

function Post1() {
  return (
    <div className='post'> 
    <div className='postContanair'>
        <div className="postTop">
            <img src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" alt="error" className="postImage" />
            <span className="postUserName">Jorge Spensor</span>
            <span className="postTime">5 mins ago  <b>.</b>   </span>
            <img src=" data:image/png;base64,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" alt="error" className="visibility" />
            
        </div>
        <div className="postCenter">
            <div className="postCaption">
                Hellow guys, I am back again 😎 
            </div>
            <img src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" alt="error" className="postedImage" />
        </div>
        <div className="postBottom"> 
            <div className="postBottomLeft">
                <img src="images/2.jpg" alt="" className="reactionPic" />
                <img src="images/3.jpg" alt="" className="reactionPic" />
                <img src="images/4.jpg" alt="" className="reactionPic" />
                <span className="likeCount">Rose and 91 others</span>
               
            </div>
            <div className="postBottomRight">
                <span className="commentCount">40 Comments</span>
            </div>
             
        </div>
        <div className="likeCommentsButtons"> 
        <div className="likeButton"><ThumbUpIcon/>Like</div>
        <div className="CommentButton"><CommentIcon/>Comment</div>
        <div className=" ShereButton"><ReplyIcon/>Share</div>
        </div>

    </div>
    </div>
  )
}

export default Post1