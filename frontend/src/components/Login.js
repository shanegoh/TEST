import React, { useState, useRef } from "react";
import { Card, Form, Alert, Button } from "react-bootstrap";
import axios from "axios";

const Login = (props) => {
  const userRef = useRef();
  const passwordRef = useRef();
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();

    bodyFormData.append("username", userRef.current.value);
    bodyFormData.append("password", passwordRef.current.value);

    console.log(bodyFormData.getAll("password"));

    axios({
      method: "post",
      url: "http://localhost:5000/api/login",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        props.setIsAuthenticated(true);
        console.log("You have logged in");
      })
      .catch((error) => {
        setLoginError(true);
      });
  };

  return (
    <>
      <Card className="mx-auto" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={submit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username:</Form.Label>
              <Form.Control
                ref={userRef}
                type="text"
                autoComplete="off"
                id="username"
                name="username"
                placeholder="Enter your username here"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password:</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                autoComplete="off"
                id="password"
                name="password"
                placeholder="Enter your password here"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            {loginError && (
              <Alert variant="danger" className="mt-2">
                The credentials you have entered are not valid
              </Alert>
            )}
            <Button type="submit" className="w-100 mt-2">
              Log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
