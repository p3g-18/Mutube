import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const SearchScreen = () => {
  const [videos, setVideos] = useState([]);
  const { query } = useParams();
  // const [searchParam] = useSearchParams();
  // const videoId = searchParam.get("v");
  // console.log("VIDEEEEOOO", searchParam.get("v"));

  useEffect(() => {
    if (query) {
      searchVideos(query);
    }
  }, [query]);

  const searchVideos = async (searchQuery) => {
    const apiKey = "AIzaSyDRe1PiaDRmS7B7-qwFM24mzGVqY38FBeA";
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("sea", data);

      if (data.items) {
        setVideos(data.items);
      } else {
        setVideos([]);
      }
      console.log("Search results:", data.items);
    } catch (error) {
      console.error("Error fetching the videos:", error);
      setVideos([]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Search Results for: {query}</h1>
      <div className="flex flex-col gap-4 ">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div
              className="flex flex-row items-start gap-4 p-4 border border-gray-200 rounded-lg shadow-lg"
              key={video.id.videoId}
            >
              <Link
                to={`/watch?v=${video.id.videoId}`}
                className="flex-shrink-0"
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="w-80 h-auto rounded-lg"
                />
              </Link>
              <div>
                <Link
                  to={`/watch?v=${video.id.videoId}`}
                  className="text-lg font-semibold"
                >
                  <h3>{video.snippet.title}</h3>
                </Link>
                <div>{video.snippet.channelTitle}</div>
                <div className="text-gray-600 line-clamp-2">
                  {video.snippet.description}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
