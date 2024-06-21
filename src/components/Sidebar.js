import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // @ts-ignore
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return isMenuOpen ? null : (
    <div className="w-60 text-center flex-shrink-0 py-2">
      <div className="p-5 text-lg border shadow-md w-78  ">
        <ul className="  w-25 font-semibold ">
          <Link to="/">
            <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
              Home
            </li>
          </Link>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">Live</li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
            Shorts
          </li>
        </ul>
        <hr />

        <h1 className="font-bold pt-4">Explore</h1>
        <ul>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
            Music
          </li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">Game</li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
            Movies
          </li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
            Sports
          </li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">News</li>
        </ul>
        <hr />

        <h1 className=" py-2 font-bold pt-4">You</h1>
        <ul>
          <li className=" hover:bg-gray-300 rounded-md">Your Channel</li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
            History
          </li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
            Playlist
          </li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
            Your Videos
          </li>
          <li className=" hover:bg-gray-300 cursor-pointer rounded-lg">
            Liked Videos
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
