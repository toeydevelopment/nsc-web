import React from "react";
import CustomTable from "../../common/components/table";
import { Box } from "@chakra-ui/core";
import Card from "../../common/components/Card";
import CardHeader from "../../common/components/CardHeader";
import CardBody from "../../common/components/CardBody";
import { makeStyles } from "@material-ui/core";
import { useAllUser } from "../../common/hooks/useAllUser";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

function VictimPage() {
  const classes = useStyles();
  const [victims, ids] = useAllUser();

  return (
    <Box width="100vw" height="90vh" px="10" mt="10">
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>ผู้ประสบภัย</h4>
          <p className={classes.cardCategoryWhite}>
            รายละเอียดข้อมูลประสบภัยปัจจุบัน
          </p>
        </CardHeader>
        <CardBody>
          <CustomTable
            tableHeaderColor="primary"
            tableHead={["ชื่อ", "ที่อยู่", "สถานะ", "ความเร่งด่วน"]}
            tableData={victims}
            ids={ids}
          />
        </CardBody>
      </Card>
    </Box>
  );
}

export default VictimPage;
