import { Stack } from "@chakra-ui/react";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import ChatLoading from "./miscellaneous/ChatLoading";
const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, chats } = ChatState();

  // const user = JSON.parse(localStorage.getItem("userInfo"));

  // const toast = useToast();

  // const fetchChat = async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     };
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_SERVER_URL}/api/chat`,
  //       config
  //     );
  //     setChats(data);
  //   } catch (error) {
  //     console.log(user.token);
  //     console.log(error);
  //     toast({
  //       title: "Error Occured",
  //       description: "Failed to load the Chats",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom-left",
  //     });
  //   }
  // };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    // fetchChat();
  }, [fetchAgain]);
  return (
    <div
      className={`${
        selectedChat.length === 0 || !selectedChat ? "block" : "hidden md:block"
      } bg-gray-500 text-center py-2 border h-full`}
    >
      <div className="text-2xl py-4">My Chats</div>
      <div>
        {chats ? (
          <Stack overflow="scroll">
            {chats.map((chat) => (
              <div
                className={`${
                  selectedChat === chat && "bg-themeColor "
                } rounded py-1 last:py-0 cursor-pointer`}
                onClick={() => {
                  setSelectedChat(chat);
                }}
                key={chat._id}
              >
                <p
                  className={`${
                    selectedChat === chat && "text-white "
                  } text-lg `}
                >
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </p>
              </div>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </div>
    </div>
  );
};

export default MyChats;
