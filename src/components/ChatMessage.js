import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex items-center mt-1">
      <img
        className="h-8"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/64/64572.png?w=740&t=st=1679414595~exp=1679415195~hmac=46f7c938abf468d8260cb2497532b83d33bf4a102974c8d842fa6da824c8f345"
      />
      <h1 className="font-bold text-base px-2 whitespace-nowrap ">{name}</h1>
      <h2 className="whitespace-nowrap">{text}</h2>
    </div>
  );
};

export default ChatMessage;
