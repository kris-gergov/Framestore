import { useState, useEffect } from "react";
const { response } = require("../api/twitter");

const useTweets = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        response.then((res) => setTweets(res));

        return () => setTweets([]);
    }, []);

    return tweets;
};

export default useTweets;
