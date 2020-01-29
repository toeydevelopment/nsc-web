import React from "react";
import { HelperCard } from "./components";
import { useHelpData } from "../../common/hooks/useHelp";
import { CircularProgress } from "@material-ui/core";
import { Box } from "@chakra-ui/core";

export default function HelperRequestPage(props) {
  console.log(props)
  const [helpData, loading] = useHelpData(props.isHelp);
  return (
    <React.Fragment>
      <div
        style={{
          padding: "1rem"
        }}
      >
        <HelperCard helps={helpData} />
        {loading && (
          <Box
            pos="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%);"
          >
            <CircularProgress color="primary" />
          </Box>
        )}
      </div>
    </React.Fragment>
  );
}
