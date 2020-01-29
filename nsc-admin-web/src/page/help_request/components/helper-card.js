import React from "react";
import { Box, Flex, Text, Divider, MenuDivider } from "@chakra-ui/core";
import { Grid } from "@material-ui/core";

export default function helperCard({ helps }) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {helps.map(help => (
          <Grid item md={3}>
            <Flex
              key={help.id}
              w="100%"
              h="14rem"
              justify="center"
              alignItems="center"
              boxShadow="md"
              borderRadius="5px"
              flexDir="column"
              bg="#fff"
            >
              <Box w="100%" h="65%">
                <div
                  className="hoverImg"
                  style={{
                    backgroundImage: `url('${help.photo}')`
                  }}
                ></div>
              </Box>
              <Box w="100%" h="35%">
                <Text
                  fontSize="md"
                  style={{ width: "100%" }}
                  px="2"
                  display="block"
                >
                  {help.title} <br /> <hr style={{ width: "100%" }} />
                </Text>
                <Text
                  fontSize="xs"
                  p="2"
                  style={{ width: "100%" }}
                  textAlign="left"
                  display="block"
                >
                  {help.description}
                </Text>
              </Box>
            </Flex>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
