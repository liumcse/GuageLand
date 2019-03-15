import React from "react";
import { Link } from "react-router-dom";

const PageHome = () => (
  <div className="container">
    <div className="logo" />
    <Link
      to="#"
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "inline",
        marginTop: "5rem"
      }}
    >
      <div className="btn login">LOGIN</div>
    </Link>
    <Link
      to="#"
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "inline",
        marginTop: "1rem"
      }}
    >
      <div className="btn sign-up">SIGN UP</div>
    </Link>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem;
        }
        .logo {
          background-color: red;
          width: 10rem;
          height: 10rem;
          border-radius: 10rem;
          margin-top: 8rem;
        }
        .btn {
          background-color: white;
          color: black;
          border: none;
          border-radius: 3px;
          width: 10rem;
          padding: 1rem 0;
        }
        .login {
        }
        .sign-up {
        }
      `}
    </style>
  </div>
);

export default PageHome;
