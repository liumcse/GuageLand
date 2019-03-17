import React from "react";
import { Link } from "react-router-dom";
import GoodImg from "@components/GoodImg";
import tickIcon from "@common/assets/icons/tick.png";

const PageQuizDone = () => (
  <div className="container">
    <div className="logo">
      <GoodImg src={tickIcon} width="2rem" />
    </div>
    <div className="text">Fantastic! Your core is 80/100.</div>
    <Link to="/profile">
      <div className="go-back btn">Go back</div>
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
          border-radius: 8rem;
          margin-top: 4rem;
          z-index: -1;
        }
        .text {
          margin-top: 2rem;
          color: white;
        }
        .btn {
          margin-top: 3rem;
          background-color: white;
          color: black;
          border: 2px solid orange;
          width: 5rem;
          padding: 0.5rem;
        }
      `}
    </style>
  </div>
);

export default PageQuizDone;
