import React, { useState } from "react";
import VideoList from "./VideoList";
import TweetList from "./TweetList";

import useVideos from "../hooks/useVideos";
import useTweets from "../hooks/useTweets";

const App = () => {
    const [selectedPlatform, setSelectedPlatform] = useState("youtube");
    const videos = useVideos([]);
    const tweets = useTweets([]);

    return (
        <div className="ui container">
            <div className="ui huge header">Framestore Social Feed</div>
            <button
                className="ui red button"
                onClick={() => setSelectedPlatform("youtube")}
            >
                Youtube
            </button>
            <button
                className="ui primary button"
                onClick={() => setSelectedPlatform("twitter")}
            >
                Twitter
            </button>
            <div className="ui divider"></div>
            {selectedPlatform === "youtube" ? (
                <VideoList videos={videos} />
            ) : (
                <TweetList videos={tweets} />
            )}
        </div>
    );
};

export default App;
