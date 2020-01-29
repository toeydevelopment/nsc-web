import React from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { PRIMARY, BROWN_LIGHT } from "../../constants";

function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const handleOnChange = event => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleOnSubmit = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <Flex
        top="50%"
        left="50%"
        transform="translate(-50%,-50%)"
        pos="fixed"
        justifyContent="center"
        alignItems="center"
      >
        <Box rounded="md" backgroundColor={PRIMARY} padding="2rem">
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Input
              placeholder="username"
              size="lg"
              margin="1rem 0"
              value={username}
              onChange={handleOnChange}
              name="username"
            />
            <Input
              placeholder="password"
              type="password"
              size="lg"
              margin="1rem 0"
              value={password}
              onChange={handleOnChange}
              name="password"
            />
            <Button backgroundColor={BROWN_LIGHT} color="#fff" onClick={handleOnSubmit}>Submit</Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default LoginPage;
