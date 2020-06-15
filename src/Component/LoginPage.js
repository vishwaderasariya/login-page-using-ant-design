import React from "react";
import { Button, Input, Form } from "antd";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  return (
    <div
      style={{
        display: "inline",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#000",
          height: "40px",
          color: "#fff",
          fontSize: "medium",
          fontFamily: `"Roboto Slab", serif`,
          textAlign: "center",
          lineHeight: "40px",
        }}
      >
        Login page
      </div>
      <div>
        <Button
          className="btn-login-with-google"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://accounts.google.com/AddSession/signinchooser?hl=en&continue=https%3A%2F%2Fmail.google.com%2Fmail&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession";
          }}
        >
          <FcGoogle size={25} style={{ marginRight: "12px" }} />
          Log in with Google
        </Button>
      </div>
      <div style={{ marginBottom: "25px" }}>or</div>
      <div>
        <Input placeholder="Email" type="email"></Input>
      </div>
      <div>
        <Input placeholder="Password" type="password"></Input>
      </div>
      <div>
        <Button className="btn-login" htmlType="submit">
          Log In
        </Button>
      </div>
      <div>
        <a href="#">Forget password?</a>
        <p>
          No account? <a href="#">reate one</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
