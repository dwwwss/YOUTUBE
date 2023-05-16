import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveValue, setLiveValue] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: makeRandomString(20) + "🛩️",
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="p-2 ml-2 border border-black w-full h-[550px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} name={message.name} text={message.text} />
        ))}
      </div>
      <form
        className="p-2 ml-2 border border-black w-96 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Ayush kumawat",
              text: liveValue,
            })
          );

          setLiveValue("");
        }}
      >
        <input
          className="w-72 p-1 border hover:border-blue-600"
          type="text"
          value={liveValue}
          onChange={(e) => setLiveValue(e.target.value)}
        />
        <button className="m-2 border border-gray-500 hover:border-blue-400 rounded-lg p-1">
          SEND
        </button>
      </form>
    </>
  );
};

export default LiveChat;
