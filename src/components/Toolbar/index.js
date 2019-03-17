import React from "react";
import GoodImg from "@components/GoodImg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import botIcon from "@common/assets/icons/chatbot.png";
import homeIcon from "@common/assets/icons/home_icon.png";
import earthIcon from "@common/assets/icons/earth_button.png";
import magnifierIcon from "@common/assets/icons/magnifier.png";
import profileIcon from "@common/assets/icons/profile_icon.png";

// eslint-disable-next-line no-unused-vars
const Findings = ["/findings"];
const Chat = ["/chat"];
const House = ["/house"];
const Profile = ["/profile"];

const Toolbar = props => {
  const {
    location: { pathname }
  } = props;
  return (
    <div className="container no-select">
      <div className="small no-select">
        <div id="findings" className="icon-wrapper no-select">
          <Link to="/findings">
            <GoodImg width="2rem" src={magnifierIcon} />
          </Link>
        </div>
      </div>
      <div className="small no-select">
        <div id="chat" className="icon-wrapper no-select">
          <Link to="/chat">
            <GoodImg width="2rem" src={botIcon} />
          </Link>
        </div>
      </div>
      <div className="big no-select">
        <div className="icon-wrapper no-select">
          <Link to="/discovery">
            <GoodImg width="3rem" src={earthIcon} />
          </Link>
        </div>
      </div>
      <div className="small no-select">
        <div id="house" className="icon-wrapper no-select">
          <Link to="/house">
            <GoodImg width="2rem" src={homeIcon} />
          </Link>
        </div>
      </div>
      <div className="small no-select">
        <div id="profile" className="icon-wrapper no-select">
          <Link to="/profile">
            <GoodImg width="2rem" src={profileIcon} />
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
          justify-content: center;
          height: 100%;
        }
        .icon-bot {
          height: 2rem;
        }
        .selected {
          background-color: #9bb3e1;
        }
        #findings {
          background-color: ${Findings.includes(pathname)
            ? "#9bb3e1"
            : "white"};
        }
        #chat {
          background-color: ${Chat.includes(pathname) ? "#9bb3e1" : "white"};
        }
        #profile {
          background-color: ${Profile.includes(pathname) ? "#9bb3e1" : "white"};
        }
        #house {
          background-color: ${House.includes(pathname) ? "#9bb3e1" : "white"};
        }
      `}</style>
    </div>
  );
};

export default withRouter(Toolbar);
