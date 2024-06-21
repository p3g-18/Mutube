import React from "react";
import numeral from "numeral";
import moment from "moment/moment";

const VideoCard = ({ info }) => {
  console.log("INFO ", info);

  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="py-2 shadow-lg w-72 rounded-xl">
      <img className="rounded-xl" src={thumbnails.standard.url} />
      <div>
        <ul>
          <li className="font-bold p-2">{title}</li>
          <li className="p-2">{channelTitle}</li>
        </ul>
      </div>
      <div>
        <span className="px-2">
          {numeral(statistics.viewCount).format("0.a")} views
        </span>
        <span className=""> {moment(publishedAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default VideoCard;
