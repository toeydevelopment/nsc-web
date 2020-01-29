import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import { GoogleMap } from "./components";
import { makeStyles, Fab } from "@material-ui/core";
import buildCardInfo from "./buildCardInfo";
import CardInfo from "./components/CardInfo";
import { useAllUser } from "../../common/hooks/useAllUser";
import DrawerCollapse from "../../common/components/Drawer";
import { Create } from "@material-ui/icons";


const DashboardPage = () => {
  const [openDrawerCollapse, setOpenCollapse] = React.useState(false);

  function handleDrawer() {
    setOpenCollapse(false);
  }

  function openDrawer() {
    setOpenCollapse(true);
  }

  return (
    <React.Fragment>
      <DrawerCollapse isOpen={openDrawerCollapse} onClose={handleDrawer} />
      <Flex position="fixed" zIndex="99" bottom="1rem" right="1rem" justify="space-evenly">
        <Fab variant="extended" onClick={openDrawer} color="secondary">
          <Create />
          เขียนข่าว
        </Fab>
      </Flex>
      <Flex
        width="100vw"
        minHeight="100vh"
        flexDirection="column"
        justifyContent="space-around"
        px="10"
        pt="10"
      >
        <Flex
          width="100%"
          height="30%"
          justifyContent="space-between"
          alignItems="center"
          wrap="wrap"
        >
          {buildCardInfo().map(c => (
            <Box width={"20%"}>
              <CardInfo
                title={c.title}
                ICON={c.ICON}
                message={c.message}
                data={c.data}
                color={c.color}
              />
            </Box>
          ))}
        </Flex>
        <Flex
          justify="space-around"
          align="flex-start"
          height="75vh"
          width="100%"
        >
          <Box width="100%" height="90%">
            <GoogleMap />
          </Box>
          
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default DashboardPage;
