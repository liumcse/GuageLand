import React from "react";
import { Link } from "react-router-dom";
import GoodImg from "@components/GoodImg";
import logoIcon from "@common/assets/icons/logo.png";

const PageLogin = () => (
  <div className="container">
    <div className="logo">
      <GoodImg src={logoIcon} width="10rem" />
    </div>
    <div className="login_page">
      <input type="email" id="Login" placeholder="Login"></input>
      <input type="password" id="Password" placeholder="Password"></input>
    </div>
    <div className="Btn_wrapper">
      <Link
        to="/findings"
        style={{ marginTop: "3rem" }}>
        <div className="btn">LOGIN</div>
      </Link>
    </div>
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
          border-radius: 8rem;
          margin-top: 5rem;
        }
        #Password{
          padding: 0.5rem;
          margin-top: 1rem;
          height: 1rem;
        }
        #Login {
          padding: 0.5rem;
          height: 1rem;
        }
        .login_page {
          margin-top: 2rem;
          height: 5rem;
        }
        .btn{
          margin-top: 3rem;
          background-color: white;
          color: black;
          border: 2px solid orange;
          width: 5rem;
          padding: 0.5rem;
        }
      `}
    </style>
  </div >
);

export default PageLogin;
