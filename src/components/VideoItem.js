import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
    return (
        <div
            className="item video-item"
            onClick={() => props.onVideoSelect(props.video)}
        >
            <a
                href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`}
            >
                <img
                    src={props.video.snippet.thumbnails.medium.url}
                    alt="thumbnail"
                    className="ui image"
                />
            </a>
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
                <div className="ui blue basic label">
                    {props.video.snippet.channelTitle}
                </div>
                <div className="ui label">
                    {new Date(props.video.snippet.publishedAt).toLocaleString()}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
