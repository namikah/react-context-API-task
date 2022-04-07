import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Banner from "../../components/layouts/banner/Banner";
import { useLoadingContext } from "../../context/loading";

const loginTo = {
  username: "",
  password: "",
};

function Login() {
  const { push } = useHistory();
  const [error, setError] = useState("");
  const [login, setLogin] = useState(loginTo);
  const [{ setLocalLogin }] = useLoadingContext([]);

  const handleCheck = () => {
    if (login.username === "admin" && login.password === "admin") {
      localStorage.setItem("login", JSON.stringify(true));
      setLocalLogin(true);
      push({
        pathname: "/products",
        // search: "",
        // state: localStorage.getItem("login"),
      });
    } else {
      setError("username or password incorrect !");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    setError("");
  };

  return (
    <>
      <Banner title={"Log in"} />
      <div className="container d-flex flex-column align-items-center">
        <Form
          inline
          style={{ border: "1px solid gray", width: "400px" }}
          className="p-5 col-3 mt-1 mb-1"
        >
          <FormGroup className="mb-2 me-sm-2 mb-sm-3">
            <Label
              className="me-sm-1 d-flex justify-content-start"
              for="username"
              style={{ color: "#6c757d" }}
            >
              Username
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="username"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
              className="me-sm-1 d-flex justify-content-start"
              for="password"
              style={{ color: "#6c757d" }}
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="password"
              type="password"
              onChange={handleChange}
            />
          </FormGroup>
          <p
            style={{ color: "red" }}
            className="mt-3 d-flex justify-content-start"
          >
            {error}
          </p>

          <Button onClick={handleCheck} className="mt-2">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
