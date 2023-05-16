const MY_GOOGLE_APIKEY = "AIzaSyAU2-mVhzbhS6ZavjPh7Rm_wI9kth5Q5Js";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  MY_GOOGLE_APIKEY;

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENT_API =
  " https://youtube.googleapis.com/youtube/v3/liveChat/messages?key=" +
  MY_GOOGLE_APIKEY;

export const OFFSET_LIVE_CHAT = 25;
