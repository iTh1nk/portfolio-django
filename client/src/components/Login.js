import React, { useState, useContext } from "react";
import { Modal, Icon } from "semantic-ui-react";
import { Form, Button, Input } from "formik-semantic-ui";
import * as Yup from "yup";
import Axios from "axios";
import "./ErrorMessage.css";
import { AssignContext } from "./AssignContext";

export default function Login() {
  const [open, setOpen] = useState(true);
  const { setIsAuthenticated } = useContext(AssignContext);
  return (
    <>
      <Modal
        // basic
        centered={false}
        dimmer="blurring"
        open={open}
        closeOnEscape={false}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          Authentication
          <Icon
            style={{ position: "absolute", top: "1em", right: "2em" }}
            name="home"
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/");
            }}
          />
        </Modal.Header>
        <Modal.Content>
          <Form
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string().required("Name is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={(values, formikApi) => {
              setTimeout(() => {
                console.log(JSON.stringify(values));
                formikApi.setSubmitting(false);
                setIsAuthenticated(true)
              }, 1000);
            }}
            render={({ handleReset }) => (
              <Form.Children>
                <Input
                  label="Username"
                  name="username"
                  inputProps={{
                    type: "text",
                  }}
                />
                <Input
                  label="Password"
                  name="password"
                  inputProps={{
                    type: "password",
                  }}
                />
                <Button.Submit
                  positive
                  content="Login"
                  style={{ marginRight: "1em" }}
                />
                <Button onClick={handleReset} content="Reset" />
              </Form.Children>
            )}
          />
        </Modal.Content>
      </Modal>
    </>
  );
}
