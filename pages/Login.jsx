import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { posts } from "../data";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showAlert, setShowAlert] = useState({ state: false, msg: "" });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowAlert({ state: true, msg: "Register new account" });
    } else if (user.email != data.email || user.password != data.password) {
      setShowAlert({ state: true, msg: "wrong credinttials !" });
    } else {
      localStorage.setItem("posts", JSON.stringify({ posts }));
      navigate("/posts");
    }
  };

  return (
    <div className="login-register-form">
      <h5 className="text-center mb-4">Blog Posts</h5>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email", { required: "Required Field" })}
            type="email"
            placeholder="Enter email"
          />
          <p className="error-msg">{errors.email?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", {
              required: "Required Field",
              minLength: {
                value: 10,
                message: "Min Length must be 10",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <p className="error-msg">{errors.password?.message}</p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <p>
          Didn't have an account?
          <Link to="/register"> Regiter here</Link>
        </p>
      </Form>

      {showAlert.state && <p className="error-msg">{showAlert.msg}</p>}
    </div>
  );
};

export default Login;
