import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import CardFooter from "components/Card/CardFooter";

const useStyles = makeStyles(styles);

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
        <p className={classes.cardCategory}>{title}</p>
        <h3 className={classes.cardTitle}>{data}</h3>
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
