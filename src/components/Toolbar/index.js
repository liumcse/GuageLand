import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import botIcon from "@common/assets/icons/chatbot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line no-unused-vars
var Findings = ["/findings"];
var Chat = ["/chat"];
var House = ["/house"];
var Profile = ["/profile"];

const Toolbar = props => {
  const {
    location: { pathname }
  } = props;
  return (
    <div className="container">
      <div className="small">
<<<<<<< HEAD
        <div id="findings" className="icon-wrapper">
=======
        <div className="icon-wrapper">
>>>>>>> origin/develop
          <Link to="/findings">
            <FontAwesomeIcon icon="search" size="2x" />
          </Link>
        </div>
      </div>
      <div className="small">
        <div id="chat" className="icon-wrapper">
          <Link to="/chat">
            <img className="icon-bot" src={botIcon} />
          </Link>
        </div>
      </div>
      <div className="big">
        <div className="icon-wrapper">
          <Link to="/discovery">
            <FontAwesomeIcon icon="globe-asia" size="3x" />
          </Link>
        </div>
      </div>
      <div className="small">
<<<<<<< HEAD
        <div id="house" className="icon-wrapper">
          <Link to="/house">
            <FontAwesomeIcon icon="home" size="2x" />
          </Link>
        </div>
      </div>
      <div className="small">
        <div id="profile" className="icon-wrapper ">
          <Link to="/profile">
=======
        <div className="icon-wrapper">
          <Link to="/">
            <FontAwesomeIcon icon="home" size="2x" />
          </Link>
        </div>
        <div className="icon-wrapper">
          <Link to="/">
>>>>>>> origin/develop
            <FontAwesomeIcon icon="cog" size="2x" />
          </Link>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 3.5rem;
          background-color: white;
          position: fixed;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .small {
          justify-content: space-around;
          width: 50%;
          height: 100%;
          align-items: center;
        }
        .big {
          margin-bottom: 1rem;
          background-color: white;
          color: black;
          border-radius: 100rem;
          padding: 18px;
        }
        .big > .icon-wrapper {
          padding: 0;
        }
        .icon-wrapper {
          padding: 0 1rem;
          margin: auto;
          display: flex;
          align-items: center;
          height: 100%;
        }
        .icon-bot {
          height: 2rem;
        }
        .selected {
          background-color: #9bb3e1;
        }
        #findings{
          background-color: ${Findings.includes(pathname) ? "#9bb3e1" : "white"};
        }
        #chat{
          background-color: ${Chat.includes(pathname) ? "#9bb3e1" : "white"};
        }
        #profile{
          background-color: ${Profile.includes(pathname) ? "#9bb3e1" : "white"};
        }
        #house{
          background-color: ${House.includes(pathname) ? "#9bb3e1" : "white"};
        }
      `}</style>
    </div>
  );
};

export default withRouter(Toolbar);
