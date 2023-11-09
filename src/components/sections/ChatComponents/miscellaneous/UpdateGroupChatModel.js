// import { ViewIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Button,
//   FormControl,
//   IconButton,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Spinner,
//   useDisclosure,
//   useToast,
// } from "@chakra-ui/react";
// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { ChatState } from "../../Context/ChatProvider";
// import UserBadgeItem from "../UserAvatar/UserBadgeItem";
// import UserListItem from "../UserAvatar/UserListItem";

// const UpdateGroupChatModel = ({ fetchAgain, setFetchAgain, fetchMessages }) => {
//   const [groupChatName, setGroupChatName] = useState();
//   const [search, setSearch] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [renameLoading, setRenameLoading] = useState(false);

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const { selectedChat, setSelectedChat, user } = ChatState();
//   const toast = useToast();

//   const handleRemove = async (user1) => {
//     if (selectedChat.groupAdmin._id !== user._id && user1._id !== user._id) {
//       toast({
//         title: "Only Admin can remove someone!",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     try {
//       setLoading(true);
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.put(
//         `${process.env.REACT_APP_SERVER_URL}/api/chat/groupremove`,
//         {
//           chatId: selectedChat._id,
//           userId: user1._id,
//         },
//         config
//       );
//       user1._id === user._id ? setSelectedChat() : setSelectedChat(data);
//       setFetchAgain(!fetchAgain);
//       fetchMessages();
//       setLoading(false);
//     } catch (error) {
//       toast({
//         title: "Error OCCURED",
//         description: error.responce,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setLoading(false);
//       console.log(error);
//     }
//     setGroupChatName("");
//   };

//   const handleAddUser = async (user1) => {
//     if (selectedChat.users.find((u) => u._id === user1._id)) {
//       toast({
//         title: "User Already in Group",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }

//     try {
//       setLoading(true);

//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };

//       const { data } = await axios.put(
//         `${process.env.REACT_APP_SERVER_URL}/api/chat/groupadd`,
//         {
//           chatId: selectedChat._id,
//           userId: user1._id,
//         },
//         config
//       );
//       setSelectedChat(data);
//       setFetchAgain(!fetchAgain);
//       setLoading(false);
//     } catch (error) {
//       toast({
//         title: "Error OCCURED",
//         description: error.responce.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setLoading(false);
//     }
//   };
//   const handleRename = async () => {
//     if (!groupChatName) return;

//     try {
//       setRenameLoading(true);

//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.put(
//         `${process.env.REACT_APP_SERVER_URL}/api/chat/rename`,
//         {
//           chatId: selectedChat._id,
//           chatName: groupChatName,
//         },
//         config
//       );
//       setSelectedChat(data);
//       setFetchAgain(!fetchAgain);
//       setRenameLoading(false);
//     } catch (error) {
//       toast({
//         title: "Error Occured",
//         description: error.responce.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setRenameLoading(false);
//     }
//     setGroupChatName("");
//   };
//   const handleSearch = async (query) => {
//     setSearch(query);
//     if (!query) {
//       return;
//     }
//     try {
//       setLoading(true);

//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_SERVER_URL}/api/user?search=${search}`,
//         config
//       );
//       console.log(data);
//       setLoading(false);
//       setSearchResult(data);
//     } catch (error) {
//       toast({
//         title: "Error Occured !",
//         description: "Failed to load the search result",
//         status: "error",
//         duration: "5000",
//         isClosable: true,
//         position: "bottom-left",
//       });
//     }
//   };
//   return (
//     <>
//       <IconButton
//         display={{ base: "flex" }}
//         icon={<ViewIcon />}
//         onClick={onOpen}
//       />
//       <Modal isOpen={isOpen} onClose={onClose} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader
//             fontFamily="Work Sans"
//             fontSize="35px"
//             display="flex"
//             justifyContent="center"
//           >
//             {selectedChat.chatName}
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Box w="100%" flexWrap="wrap" display="flex" pb={3}>
//               {selectedChat.users.map((u) => (
//                 <UserBadgeItem
//                   key={u._id}
//                   user={u}
//                   admin={selectedChat.groupAdmin}
//                   handleFunction={() => handleRemove(u)}
//                 />
//               ))}
//             </Box>
//             <FormControl display="flex">
//               <Input
//                 placeholder="Chat Name"
//                 mb={3}
//                 value={groupChatName}
//                 onChange={(e) => setGroupChatName(e.target.value)}
//               />
//               <Button
//                 varient="solid"
//                 colorScheme="teal"
//                 isLoading={renameLoading}
//                 onClick={handleRename}
//               >
//                 Update
//               </Button>
//             </FormControl>
//             <FormControl display="flex">
//               <Input
//                 placeholder="Add User"
//                 mb={3}
//                 onChange={(e) => handleSearch(e.target.value)}
//               />
//             </FormControl>
//             {loading ? (
//               <Spinner size="lg" />
//             ) : (
//               searchResult
//                 // .slice(0, 3)
//                 .map((user) => (
//                   <UserListItem
//                     key={user._id}
//                     user={user}
//                     handleFunction={() => handleAddUser(user)}
//                   />
//                 ))
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={() => handleRemove(user)} colorScheme="red">
//               Leave Group
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default UpdateGroupChatModel;

import React from "react";

const UpdateGroupChatModel = () => {
  return <div>UpdateGroupChatModel</div>;
};

export default UpdateGroupChatModel;
