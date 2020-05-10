import React, { useState, useContext } from "react";
import { Form, Button, Input } from "formik-semantic-ui";
import * as Yup from "yup";
import Axios from "axios";
import "./ErrorMessage.css";

export default function Signup() {
  const [open, setOpen] = useState(true);
  return (
    <>
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
              content="Add User"
              style={{ marginRight: "1em" }}
            />
            <Button onClick={handleReset} content="Reset" />
          </Form.Children>
        )}
      />
    </>
  );
}
