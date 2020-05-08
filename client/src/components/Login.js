import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";

export default function Login() {
  const [open, setOpen] = useState(true);
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
        <Modal.Header>Authentication</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={Yup.object({
              username: Yup.string()
                .min(3, "Username has to be at least 3 characters!")
                .required("Username is required!"),
              password: Yup.string()
                .min(6, "Password has to be at least 6 characters!")
                .matches(
                  /[a-n xyz 0-5]\S/g,
                  "Password doesn't meet requirements!"
                )
                .required("Password is required!"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              let data = {
                username: values.username,
                password: values.password,
              };
            }}
          >
            {/* {({ handleSubmit, isSubmitting }) => ( */}

            <Form>
              <Form.Input
                // error={{
                //   content: "Please enter username...",
                //   pointing: "below",
                // }}
                fluid
                label="Username"
                placeholder="Please enter username..."
                id="username"
              />
              <Form.Input
                // error="Please enter password..."
                fluid
                label="Password"
                placeholder="Please enter password..."
                id="password"
              />
            </Form>
            {/* )} */}
          </Formik>
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive
            icon="user"
            content="Login"
            loading={false}
            type="submit"
          />
          <Button
            color="blue"
            icon="home"
            content="Home"
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/");
            }}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}
