import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPasssward, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState();

  const toast = useToast();
  const history = useHistory();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select An Image!",
        status: "warning",
        duration: "5000", // ms
        isClosable: "true",
        position: "top",
      });
      return;
    }

    if (pics.type === "image/jpeg" || "image/png" || "image/PNG") {
      console.log("processing()");
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "كثير الكلام");
      data.append("cloud_name", "myclouddatabase");
      fetch(
        `${process.env.REACT_APP_SERVER_URL}/v1_1/myclouddatabase/image/upload`,
        {
          method: "POST",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setTimeout(setLoading(false), 3000);
          console.log("upload()");
        })
        .catch((err) => {
          console.log(err);
          setTimeout(setLoading(false), 3000);
        });
    } else {
      toast({
        title: "Please Select An Image!",
        status: "warning",
        duration: "5000", // ms
        isClosable: "true",
        position: "top",
      });
    }
    setTimeout(setLoading(false), 3000);
    return;
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !password || !confirmPasssward || !email) {
      toast({
        title: "Please Fill all Fields",
        status: "warning",
        duration: "5000", // ms
        isClosable: "true",
        position: "top",
      });
      setTimeout(setLoading(false), 2000);
      return;
    }
    if (password !== confirmPasssward) {
      toast({
        title: "Passwords do not match",
        status: "warning",
        duration: "5000", // ms
        isClosable: "true",
        position: "top",
      });
      return;
    }
    try {
      const config = {
        Headers: {
          "Conetent-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/user`,
        { name, email, password, pic },
        config
      );
      toast({
        title: "Registration Successfull",
        status: "success",
        duration: "5000", // ms
        isClosable: "true",
        position: "top",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setTimeout(setLoading(false), 2000);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error occured",
        description: error.response.data.message,
        status: "warning",
        duration: "5000", // ms
        isClosable: "true",
        position: "top",
      });
      setTimeout(setLoading(false), 2000);
    }
  };
  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload Your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        اشتراك / Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
