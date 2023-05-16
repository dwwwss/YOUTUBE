import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const lists = [
    "All",
    "Music",
    "Mixes",
    "Dramedy",
    "Live",
    "Scene",
    "News",
    "Web Developement",
    "Computer Science",
    "Motivation",
    "Motorcycling",
    // "Gyms",
    // "Bollywood Music",
    // "Lectures",
    // "Stocks",
    // "Gadgets",
    // "New to you",
    // "Indian pop Music",
  ];
  return (
    <div className="w-full flex gap-4 m-2 ">
      {lists.map((tag) => (
        <Button key={tag} name={tag} />
      ))}
    </div>
  );
};

export default ButtonList;
