import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import CustomInput from "../../../common/components/CustomInput";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("div");

export const Dialog = props => {
  const [name, setName] = React.useState("");
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={() => {}}
        onRequestClose={() => {}}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            padding: "1rem 2rem",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <CustomInput
            onChange={e => {
              setName(e.target.value);
            }}
            labelText="ชื่อ"
            id="about-me"
            formControlProps={{
              fullWidth: true
            }}
          />
          <Button
            size="large"
            onClick={() => {
              props.handleClose(name, 0);
            }}
            fullWidth={true}
            color="primary"
            variant="contained"
            style={{
              marginBottom: "1rem"
            }}
          >
            น้ำท่วม
          </Button>
          <Button
            size="large"
            onClick={() => {
              props.handleClose(name, 1);
            }}
            fullWidth={true}
            color="secondary"
            variant="contained"
            style={{
              marginBottom: "1rem"
            }}
          >
            ไฟไหม้
          </Button>
          <Button
            size="large"
            onClick={() => {
              props.handleClose(name, 2);
            }}
            fullWidth={true}
            color="default"
            variant="contained"
            style={{
              marginBottom: "0rem"
            }}
          >
            แผ่นดินไหว
          </Button>
        </div>
      </Modal>
    </>
  );
};

Dialog.prototype = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
