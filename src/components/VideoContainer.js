import React, { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_URL);
      const json = await data.json();
      console.log("data: ", json);
      setVideos(json.items);
    } catch (error) {
      console.log("Error Fetching Videos", error);
    }
  };

  return (
    <div className="flex flex-wrap  justify-around m-6 pr-20 ">
      {videos.length === 0 ? (
        <p>Loading videos...</p>
      ) : (
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
