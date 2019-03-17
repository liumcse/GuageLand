import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "@common/assets/icons/logo.png";
import Title from "@common/assets/icons/Guageland_title.png";
import GoodImg from "@components/GoodImg";

const PageHome = () => (
  <div className="container">
    <div className="logo">
      <GoodImg src={logoIcon} width="10rem" />
    </div>
    <img className="title-image" src={Title} alt="title" />
    <Link
      to="/login"
      style={{
        marginTop: "8rem"
      }}
    >
      <div className="btn login">LOGIN</div>
    </Link>
    <Link
      to="#"
      style={{
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
          justify-content: center;
          text-align: center;
          padding: 1rem;
        }
        .logo {
          border-radius: 10rem;
          margin-top: 2rem;
        }
        .logo-image {
          width: 20rem;
        }
        .title-image {
          width: 20rem;
          margin-top: 2rem;
          position: absolute;
          z-index: -1;
        }
        .btn {
          background-color: white;
          color: black;
          border: none;
          border-radius: 3px;
          width: 10rem;
          padding: 1rem 0;
        }
      `}
    </style>
  </div>
);

export default PageHome;
