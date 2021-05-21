import axios from "axios";
import { useState, useEffect } from "react";
const { youtube_key } = require("../config");

const useVideos = () => {
    const [videos, setVideos] = useState([]);
    const key = youtube_key;

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=UCGkRPUvp4tZXyd4EZUdjrCw&part=snippet,id&order=date&maxResults=5`
            )
            .then((res) => setVideos(res.data.items))
            .catch((err) => console.log(err));

        return () => {
            setVideos([]);
        };
    }, []);

    return videos;
};

export default useVideos;
