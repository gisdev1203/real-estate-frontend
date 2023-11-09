// import {
//   Box,
//   Button,
//   FormControl,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   useDisclosure,
//   useToast,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { ChatState } from "../../Context/ChatProvider";
// import axios from "axios";
// import UserListItem from "../UserAvatar/UserListItem";
// import UserBadgeItem from "../UserAvatar/UserBadgeItem";

// const GroupChatModel = ({ children }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [groupChatName, setGroupChatName] = useState();
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [search, setSearch] = useState([]);
//   const [searchResult, setSearchResult] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const toast = useToast();
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
//         `http://localhost:5454/api/user?search=${search}`,
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
//   const handleSubmit = async () => {
//     if (!groupChatName || !selectedUsers) {
//       toast({
//         title: "Please fill all the fields !",
//         status: "warning",
//         duration: "5000",
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.post(
//         "http://localhost:5454/api/chat/group",
//         {
//           name: groupChatName,
//           users: JSON.stringify(selectedUsers.map((u) => u._id)),
//         },
//         config
//       );

//       setChats([data, ...chats]);
//       onClose();
//       toast({
//         title: "New group chat created",
//         status: "success",
//         duration: "5000",
//         isClosable: true,
//         position: "bottom",
//       });
//     } catch (error) {
//       toast({
//         title: "failed to create the chat",
//         //  description:error.responce.data,
//         status: "success",
//         duration: "5000",
//         isClosable: true,
//         position: "bottom",
//       });
//       console.log(error);
//     }
//   };

//   const handleDelete = (delUser) => {
//     setSelectedUsers(selectedUsers.filter((sel) => sel._id !== delUser._id));
//   };

//   const handleGroup = (userToAdd) => {
//     if (selectedUsers.includes(userToAdd)) {
//       toast({
//         title: "User already added",
//         status: "warning",
//         duration: "5000",
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }
//     setSelectedUsers([...selectedUsers, userToAdd]);
//   };

//   const { user, chats, setChats } = ChatState();
//   return (
//     <>
//       <span onClick={onOpen}>{children}</span>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader
//             fontSize="35px"
//             fontFamily="Work sans"
//             display="flex"
//             justifyContent="center"
//           >
//             Create Group Chat
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody display="flex" flexDir="column" alignItems="center">
//             <FormControl>
//               <Input
//                 placeholder="Chat Name"
//                 mb={3}
//                 onChange={(e) => setGroupChatName(e.target.value)}
//               />
//             </FormControl>
//             <FormControl>
//               <Input
//                 placeholder="Add User"
//                 mb={1}
//                 onChange={(e) => handleSearch(e.target.value)}
//               />
//             </FormControl>
//             <Box w="100%" display="flex" flexWrap="wrap">
//               {selectedUsers.map((u) => (
//                 <UserBadgeItem
//                   key={user._id}
//                   user={u}
//                   handleFunction={() => handleDelete(u)}
//                 />
//               ))}
//             </Box>

//             {loading ? (
//               <div>Loading</div>
//             ) : (
//               searchResult
//                 .slice(0, 4)
//                 .map((user) => (
//                   <UserListItem
//                     key={user._id}
//                     user={user}
//                     handleFunction={() => handleGroup(user)}
//                   />
//                 ))
//             )}
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" onClick={handleSubmit}>
//               Create Chat
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default GroupChatModel;

import React from "react";

const GroupChatModel = () => {
  return <div>GroupChatModel</div>;
};

export default GroupChatModel;
