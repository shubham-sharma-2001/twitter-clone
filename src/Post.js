import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <>
      <div className="post">
        <div className="post__avatar">
          <Avatar alt="Remy Sharp" src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {/* Shubham sharma{' '} */}
                {displayName}{' '}
                <span className="post__headerspecial">
                  {verified && <VerifiedIcon className="post__badge" />}
                  {username}
                </span>
              </h3>
            </div>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small" />
        <PublishIcon fontSize="small" />
      </div>
    </>
  );
}

export default Post;
