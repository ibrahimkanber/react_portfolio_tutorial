import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignIn() {
  const signInSchema = Yup.object({
    email: Yup.string().email().required("E mail is required"),
    password: Yup.string()
      .min(6, "Password must be min 6 char")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(values);
    },
    validationSchema: signInSchema,
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            isInvalid={formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            isInvalid={formik.errors.password}
          />
          <Form.Control.Feedback type="invalid" >
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export { SignIn };
