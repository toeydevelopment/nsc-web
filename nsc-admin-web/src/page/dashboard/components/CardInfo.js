import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import PropTypes from "prop-types";

import Card from "../../../common/components/Card";
import CardHeader from "../../../common/components/CardHeader";
import CardIcon from "../../../common/components/CardIcon";
import CardFooter from "../../../common/components/CardFooter";
import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "../../../common/styles/material-dashboard-react";
import { Text } from "@chakra-ui/core";

const dashboardStyle = {
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(dashboardStyle);

const CardInfo = ({ title, ICON, data, message, color }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color={color} stats icon>
        <CardIcon color={color}>
          <Icon>
            <ICON />
          </Icon>
        </CardIcon>
        <p className={classes.cardCategory}>
          <Text
            alignSelf="flex-start"
            fontSize={title.length > 20 ? "xl" : "2xl"}
          >
            {title}
          </Text>
        </p>
        <h3 className={classes.cardTitle}>
          <Text fontSize="4xl">{data}</Text>
        </h3>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            {message}
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

CardInfo.propTypes = {
  ICON: PropTypes.elementType.isRequired,
  title: PropTypes.string,
  data: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string
};

CardInfo.defaultProps = {
  title: "",
  message: "",
  data: "",
  color: "success"
};

export default CardInfo;
