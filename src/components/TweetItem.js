import "./VideoItem.css";
import React from "react";

const TweetItem = (props) => {
    return (
        <div className="item video-item">
            <div className="content">
                <div className="header">{props.tweet.author}</div>
                <div className="header">{props.tweet.text}</div>
                <div className="header">{props.tweet.created_at}</div>
            </div>
        </div>
    );
};

export default TweetItem;
