import React from 'react';
import './TweetBox.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt="img"
            src="https://www.shutterstock.com/image-vector/unknown-male-avatar-profile-image-260nw-1705329322.jpg"
          />
          <input placeholder="What is happening here" />
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
