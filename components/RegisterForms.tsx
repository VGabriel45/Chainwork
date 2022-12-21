import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Stack,
  FormHelperText,
  Center,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";

const RegisterForm = () => {
  // Declare state variables for the form values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Event handler for the form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target.value);

    // Validate the form values and display an error message if necessary
    if (!username || !password) {
      setError(true);
      return;
    }

    // Reset the error message
    setError(false);

    // Submit the form to the server
    // ...

    // Clear the form values
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Center>
        <Stack
          borderRadius={"10px"}
          p="25px"
          border="1px solid gray"
          mt={"5vh"}
          w={"25vw"}
          spacing={3}
        >
          <Heading m="auto">Register</Heading>
          <FormControl isInvalid={error}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {error && (
              <FormHelperText id="username-error">{error}</FormHelperText>
            )}
          </FormControl>
          <FormControl isInvalid={error}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {error && <FormHelperText id="email-error">{error}</FormHelperText>}
          </FormControl>
          <FormControl isInvalid={error}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {error && (
              <FormHelperText id="password-error">{error}</FormHelperText>
            )}
          </FormControl>
          <Button colorScheme="blue">Submit</Button>
        </Stack>
      </Center>
    </form>
  );
};

export default RegisterForm;
