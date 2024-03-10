import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="login-register-form">
      <h5 className="text-center mb-4">Blog Posts</h5>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            {...register("name", {
              required: "Required Field",
              minLength: {
                value: 5,
                message: "Min Length must be 5",
              },
            })}
            type="text"
            placeholder="Enter email"
          />
          <p className="error-msg">{errors.name?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
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
          <p className="error-msg"> {errors.password?.message}</p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <p>
          have an account?
          <Link to="/"> Login here.</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;