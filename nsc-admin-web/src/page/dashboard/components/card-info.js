import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/core";

const CardInfo = ({ title, info, isMargin }) => {
  return (
    <Box
      m={isMargin ? "3" : "0"}
      d="flex"
      shadow=".2rem .2rem 1rem rgba(0,0,0,0.2)"
      padding="0.3rem"
      rounded="md"
      width="8rem"
      height="8rem"
      overflow="hidden"
      justifyItems="space-between"
      flexDirection="column"
      position="relative"
      bg="white"
    >
      <Box height="3.5rem" width="100%" alignSelf="flex-start" m="0" p="0">
        <Text
          alignSelf="flex-start"
          fontSize={title.length > 20 ? "xl" : "2xl"}
        >
          {title}
        </Text>
      </Box>
      <Box position="absolute" bottom="0.5rem" right="0.5rem">
        <Text fontSize="4xl">{info}</Text>
      </Box>
    </Box>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  isMargin: PropTypes.bool
};

CardInfo.defaultProps = {
  title: "ผู้ประสบภัย",
  info: "100",
  isMargin: true
};

export default CardInfo;
