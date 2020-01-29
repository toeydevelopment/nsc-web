import React from "react";
import {
  Grid,
  Box,
  Input,
  Textarea,
} from "@chakra-ui/core";

const FormNews = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(2,1fr)" gap={6}>
        <Input placeholder="หัวข่าว"></Input>
        <Textarea></Textarea>
      </Grid>
    </Box>
  );
};

export default FormNews;
