import React from "react";
import TweetItem from "./TweetItem";

const TweetList = (props) => {
    return (
        <div className="ui relaxed divided list">
            {props.tweets
                ? props.tweets.map((tweet) => {
                      return <TweetItem key={tweet.id} tweet={tweet} />;
                  })
                : "Twitter API doesn't allow CORS otherwise functionality is there"}
        </div>
    );
};

export default TweetList;
