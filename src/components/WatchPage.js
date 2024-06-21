import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../Redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import WpageData from "./WpageData";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParam] = useSearchParams();
  console.log("watchpage", searchParam.get("v"));
  return (
    <div className="px-5">
      <iframe
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <WpageData />
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
