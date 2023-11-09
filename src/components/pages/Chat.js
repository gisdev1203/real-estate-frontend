import React, { useState } from "react";
import { ChatState } from "../sections/Context/ChatProvider";
import MyChats from "../sections/ChatComponents/MyChats";
import ChatBox from "../sections/ChatComponents/ChatBox";
import Headerfour from "../layouts/Headerfour";

const ChatPage = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const { selectedChat } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div>
      <Headerfour />
      <div className="flex justify-center my-4">
        {userInfo == null ? (
          <div>Please Login first</div>
        ) : (
          <div
            style={{ height: "75vh" }}
            className="flex justify-center md:justify-between w-11/12 h-full p-2.5"
          >
            <div
              className={`${
                selectedChat.length === 0 || !selectedChat
                  ? "block"
                  : "hidden md:block"
              } w-full md:w-4/12 lg:w-3/12`}
            >
              <MyChats fetchAgain={fetchAgain} />
            </div>

            <div
              className={`${
                selectedChat.length === 0 || !selectedChat
                  ? "hidden md:block"
                  : "block"
              } w-full md:w-7/12 `}
            >
              <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
