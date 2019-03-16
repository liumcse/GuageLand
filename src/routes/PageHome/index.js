import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../utils/asserts/logo.png";
import Title from "../../utils/asserts/Guageland_title.png"

const PageHome = () => (
  <div className="container">
    <div className="logo">
      <img className="logo-image" src={LogoImage} alt="Logo" />
    </div>
    <img className="title-image" src={Title} alt="title" />
    <Link
      to="#"
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "inline",
        marginTop: "8rem"
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
          border-radius: 10rem;
          margin-top: 4rem;
        }
        .logo-image {
          width: 18rem;
        }
        .title-image {
          width: 20rem;
          margin-top: 9rem;
          position: absolute;
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
