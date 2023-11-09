import React from "react";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  return (
    <div
      className={`${
        selectedChat.length !== 0 || selectedChat ? "block" : "hidden md:block"
      } w-full h-full`}
    >
      <div style={{ height: "95%" }}>
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </div>{" "}
    </div>
  );
};

export default ChatBox;
