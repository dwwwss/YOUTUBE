import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Head = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState();

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSuggestions(searchCache[searchInput]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchInput);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchInput]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // const showFilterData = () => {
  //   return const fiteredData =
  // }

  return (
    <div className="grid grid-flow-col py-3 p-2 m-2 shadow-lg sticky top-0 z-50 bg-white ">
      <div className="col-span-1 flex">
        <FontAwesomeIcon
          className="h-6 cursor-pointer"
          alt="menu"
          onClick={() => toggleMenuHandler()}
          icon={faBars}
        />
        <a href="/">
          <img
            className="h-6 ml-4 cursor-pointer"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>

      <div className="col-span-10">
        <div className="flex">
          <input
            className="w-1/2 ml-20 p-2  border border-gray-400 rounded-l-full"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <div className="border border-gray-400 rounded-r-full pl-10 bg-gray-100">
            <FontAwesomeIcon
              className=" mr-3 w-4 px-1 py-3 cursor-pointer"
              icon={faMagnifyingGlass}
            />
          </div>
        </div>
        {showSuggestion && (
          <div className="p-2 absolute bg-white ml-20 w-[36rem] rounded-xl border border-gray-200">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="hover:bg-gray-100 m-2 p-2">
                  <FontAwesomeIcon className="pr-2" icon={faMagnifyingGlass} />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-7"
          alt="profile-logo"
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png?w=740&t=st=1679414595~exp=1679415195~hmac=46f7c938abf468d8260cb2497532b83d33bf4a102974c8d842fa6da824c8f345"
        />
      </div>
    </div>
  );
};

export default Head;
