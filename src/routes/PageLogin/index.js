import React from "react";
import { Link } from "react-router-dom";

const PageLogin = () => (
  <div className="container">
    <div className="logo" />
    <div>Yo Yo world!</div>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
        }
        .logo {
          background-color: red;
          width: 10rem;
          height: 10rem;
          border-radius: 10rem;
          margin-top: 20%;
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

export default PageLogin;
