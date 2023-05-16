import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="m-2 p-2 shadow-lg w-48">
      <ul>
        <li>
          <button className="rounded-lg hover:bg-gray-200 py-2 px-16">
            <Link to="/">Home</Link>
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-200 py-2 px-16">
            Shorts
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-200 py-2 px-12">
            Subscription
          </button>
        </li>
      </ul>

      <hr></hr>

      <ul>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            Library
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            History
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-12">
            WatchLater
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-12">
            LikedVideos
          </button>
        </li>
      </ul>

      <hr></hr>
      <h1 className="font-semibold pt-5">Explore</h1>
      <ul>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            Trending
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            Shopping
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            Music
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            Films
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            Live
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            Gaming
          </button>
        </li>
        <li>
          <button className="rounded-lg hover:bg-gray-100 py-2 px-16">
            News
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
