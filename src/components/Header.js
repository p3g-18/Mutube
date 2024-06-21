import React, { useState, useEffect } from "react";
import { toggleMenu } from "../Redux/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../Redux/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // @ts-ignore
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    console.log(searchQuery);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("APICALL -", json);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div className="main grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer hover:bg-gray-400"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="Menu-icon"
        ></img>
        <a href="/">
          <img
            className="h-10 mx-2"
            src="https://raw.githubusercontent.com/PHPJunior/mtube/master/public/images/logo.png"
            alt="Mutube-logo"
          ></img>
        </a>
      </div>

      <div className=" col-span-10 px-20 flex">
        <input
          type="text"
          className="w-1/2 border  border-gray-400 p-2 rounded-l-3xl px-6  "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          className="border border-gray-400 p-2 px-4  rounded-r-3xl bg-gray-300 flex overflow-hidden"
          onClick={handleSubmit}
        >
          🔍
        </button>
        <div className=" absolute bg-white  w-[32%] shadow-lg rounded-xl mt-11 ">
          <ul>
            {showSuggestions &&
              suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-2  shadow-sm hover:bg-slate-300 rounded-lg"
                >
                  🔍 {s}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className=" col-span-1">
        <img
          className="h-10 "
          src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
          alt="profile-icon"
        />
      </div>
    </div>
  );
};

export default Header;
