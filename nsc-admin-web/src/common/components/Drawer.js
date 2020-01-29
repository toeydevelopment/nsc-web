import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  FormLabel,
  Textarea,
  Box,
  Input,
  Select,
  DrawerFooter
} from "@chakra-ui/core";
import { Button, LinearProgress, makeStyles } from "@material-ui/core";
import { useCreateNews } from "../hooks/useCreateNews";

export const DrawerCollapse = ({ isOpen, onClose }) => {
  const [news, setNews, createNews] = useCreateNews();
  const [loading, setLoading] = React.useState(false);

  const useStyles = makeStyles(theme => ({
    root: {
      width: "30vw",
      "& > * + *": {
        marginTop: theme.spacing(2)
      },
      height: "1rem"
    }
  }));

  function handleChange({ target: { name, value } }) {
    setNews({
      ...news,
      [name]: value
    });
  }

  function handleOnSubmit() {
    setLoading(true);
    createNews(news);
    onClose();
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }
  const classes = useStyles();
  return (
    <React.Fragment>
      {loading && (
        <Box
          zIndex="9999"
          pos="fixed"
          width="100vw"
          height="100vh"
          bg="rgba(0,0,0,0.3)"
        >
          <Box
            pos="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%);"
            zIndex="9999"
          >
            <LinearProgress color="primary" className={classes.root} />
          </Box>
        </Box>
      )}

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">กระจายข่าว</DrawerHeader>
          <DrawerBody>
            <Stack>
              <Box>
                <FormLabel htmlFor="username">หัวข่าว</FormLabel>
                <Input
                  id="news-title"
                  placeholder="ใส่หัวข้อข่าว"
                  name="title"
                  onChange={handleChange}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">url รูปภาพ</FormLabel>
                <Input name="photo" id="news-img" onChange={handleChange} />
              </Box>

              <Box>
                <FormLabel htmlFor="owner">ประเภทข่าว</FormLabel>
                <Select
                  id="owner"
                  defaultValue="flood"
                  name="type"
                  onChange={handleChange}
                >
                  <option value="flood">น้ำท่วม</option>
                  <option value="fire">ไฟไหม้</option>
                  <option value="earthquake">แผ่นดินไหว</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">เนื้อข่าว</FormLabel>
                <Textarea
                  name="description"
                  id="desc"
                  onChange={handleChange}
                />
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button
              variant="contained"
              color="primary"
              onClick={handleOnSubmit}
            >
              สร้างข่าว
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

DrawerCollapse.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

DrawerCollapse.defaultProps = {
  isOpen: false
};

export default DrawerCollapse;
