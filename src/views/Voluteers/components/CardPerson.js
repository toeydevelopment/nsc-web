import React from "react";
import Card from "components/Card/Card";
import CardAvatar from "components/Card/CardAvatar";
import avatar from "assets/img/faces/marc.jpg";
import { Button } from "@material-ui/core";
import CardBody from "components/Card/CardBody";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  bgColorUnAvailable: {
    backgroundColor:"#EF9A9A"
  },
  bgColorAvailable: {
    backgroundColor:"#C8E6C9"
  }
};

const useStyles = makeStyles(styles);

export default ({ avalible }) => {
  const classes = useStyles();
  const statusCircle = {
    position: "absolute",
    right: "5px",
    top: "5px",
    zIndex: 1,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: !avalible ? "#ff6659" : "#41d341"
  };
  return (
    <div className="container__card">
      <div className="status" style={statusCircle}></div>
      <Card profile className={ avalible ? classes.bgColorAvailable: classes.bgColorUnAvailable}>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a>
        </CardAvatar>

        <CardBody profile>
          <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
          <h4 className={classes.cardTitle}>Alec Thompson</h4>
          <p className={classes.description}>
            Don{"'"}t be scared of the truth because we need to restart the
            human foundation in truth And I love you like Kanye loves Kanye I
            love Rick Owens’ bed design but the back is...
          </p>
          <Button color="primary" round>
            ติดต่อ
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
