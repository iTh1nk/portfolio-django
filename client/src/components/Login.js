import React, { useState, useContext } from "react";
import { Modal, Icon } from "semantic-ui-react";
import { Form, Button, Input } from "formik-semantic-ui";
import * as Yup from "yup";
import Axios from "axios";
import "./ErrorMessage.css";
import { AssignContext } from "./AssignContext";

export default function Login() {
  const { setIsAuthenticated } = useContext(AssignContext);
  const [loginError, setLoginError] = useState("");

  return (
    <>
      <Modal
        // basic
        centered={false}
        dimmer="blurring"
        open={true}
        closeOnEscape={false}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          Authentication
          {loginError && (
            <div className="sui-error-message-custom">{loginError}</div>
          )}
          <Icon
            style={{ position: "absolute", top: ".5em", right: "1em" }}
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
              setLoginError("");
              let data = {
                username: values.username,
                password: values.password,
              };
              Axios.post("http://localhost:8000/api/v1/login/", data)
                .then((resp) => {
                  setLoginError("");
                  if (resp.data.token) {
                    localStorage.setItem("auth", resp.data.token);
                    setIsAuthenticated(true);
                  }
                })
                .catch((err) => {
                  setLoginError(err.response.data.error);
                  console.log(err.response);
                  formikApi.setSubmitting(false);
                });
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
