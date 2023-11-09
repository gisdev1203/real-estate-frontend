// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   VStack,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useToast } from "@chakra-ui/react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// const Login = () => {
//   const [show, setShow] = useState(false);
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [loading, setLoading] = useState();
//   const toast = useToast();
//   const history = useHistory();

//   const handleClick = () => setShow(!show);

//   const submitHandler = async () => {
//     setLoading(true);
//     if (!password || !email) {
//       toast({
//         title: "Please Fill all Fields",
//         status: "warning",
//         duration: "5000", // ms
//         isClosable: "true",
//         position: "top",
//       });
//       setTimeout(setLoading(false), 2000);
//       return;
//     }

//     try {
//       const config = {
//         Headers: {
//           "Conetent-type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_SERVER_URL}/api/user/login`,
//         { email, password },
//         config
//       );
//       toast({
//         title: "Login Successfull",
//         status: "success",
//         duration: "5000", // ms
//         isClosable: "true",
//         position: "top",
//       });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setTimeout(setLoading(false), 2000);
//       history.push("/chats");
//     } catch (error) {
//       console.log(error.data);
//       toast({
//         title: "Error occured",
//         description: error.response.data.message,
//         status: "warning",
//         duration: "5000", // ms
//         isClosable: "true",
//         position: "top",
//       });
//       setTimeout(setLoading(false), 2000);
//     }
//   };
//   return (
//     <VStack spacing="5px">
//       <FormControl id="email" isRequired>
//         <FormLabel>Email</FormLabel>
//         <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       </FormControl>

//       <FormControl id="password" isRequired>
//         <FormLabel>Password</FormLabel>
//         <InputGroup>
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>

//       <Button
//         colorScheme="blue"
//         width="100%"
//         style={{ marginTop: 15 }}
//         onClick={submitHandler}
//         isLoading={loading}
//       >
//         تسجيل الدخول / Login
//       </Button>
//     </VStack>
//   );
// };

// export default Login;
