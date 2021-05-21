// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    youtube_key: process.env.REACT_APP_YOUTUBE_KEY,
    twitter_key: process.env.REACT_APP_TWITTER_KEY,
};
