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
          marginTop: "0px",
          backgroundColor: "#000",
          height: "50px",
          color: "#fff",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Login page
      </div>
      <Form
        style={{
          display: "inline",
          maxWidth: "900px",
          backgroundColor: "#ffff44",
        }}
      >
        <div>
          <Button
            style={{
              border: "3px solid #000000",
              borderRadius: "8px",
              width: "20%",
              padding: "10px",
              fontFamily: "Ramabhadra', sans-serif;",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "150px",
              marginBottom: "25px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <FcGoogle style={{ marginRight: "12px" }} />
            Log in with Google
          </Button>
        </div>
        <div style={{ marginBottom: "25px" }}>or</div>
        <div>
          <Input
            size="50"
            placeholder="Email"
            style={{
              border: "3px solid #000000",
              width: "19%",
              borderRadius: "5px",
              marginBottom: "30px",
              padding: "10px",
              height: "25px",
            }}
          ></Input>
        </div>
        <div>
          <Input
            placeholder="Password"
            style={{
              border: "3px solid #000000",
              width: "19%",
              borderRadius: "5px",
              marginBottom: "30px",
              padding: "10px",
              height: "25px",
            }}
          ></Input>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              width: "20%",
              borderRadius: "8px",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              height: "40px",
              fontFamily: "Ramabhadra', sans-serif;",
              marginBottom: "30px",
            }}
          >
            Log In
          </Button>
        </div>
      </Form>
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
