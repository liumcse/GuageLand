import React from "react";
import { Link } from "react-router-dom";
import GoodImg from "@components/GoodImg";

import userProfileIcon from "@common/assets/pic/user_profile.png";
import rightArrowIcon from "@common/assets/icons/right-arrow.jpg";
import taskIcon from "@common/assets/icons/task_icon.png";
import favIcon from "@common/assets/icons/favorite.png";
import paperPlaneIcon from "@common/assets/icons/paper_plane.png";
import postIcon from "@common/assets/icons/post_icon.png";
import rewardIcon from "@common/assets/icons/reward_icon.png";

const PageProfile = () => (
  <div className="container">
    <div className="profile-bar">
      <div>
        <GoodImg width="3rem" src={userProfileIcon} />
      </div>
      <div className="info">
        <div style={{ color: "black" }}>Alice Lee</div>
        <div
          style={{
            backgroundColor: "#ffc000ff",
            color: "white",
            padding: "0.25rem 1rem",
            marginTop: "0.25rem",
            borderRadius: "3px"
          }}
        >
          Lv. 6
        </div>
      </div>
      <GoodImg width="1rem" src={rightArrowIcon} />
    </div>
    <div className="group">
      <Link to="/profile/tasks">
        <div className="element">
          <GoodImg width="2rem" src={taskIcon} />
          <div>Tasks</div>
          <GoodImg width="1rem" src={rightArrowIcon} />
        </div>
      </Link>
      <div className="element">
        <GoodImg width="2rem" src={favIcon} />
        <div>Favorites</div>
        <GoodImg width="1rem" src={rightArrowIcon} />
      </div>
      <div className="element">
        <GoodImg width="2rem" src={paperPlaneIcon} />
        <div>Paper Airplane</div>
        <GoodImg width="1rem" src={rightArrowIcon} />
      </div>
      <div className="element">
        <GoodImg width="2rem" src={postIcon} />
        <div>My Posts</div>
        <GoodImg width="1rem" src={rightArrowIcon} />
      </div>
      <div className="element">
        <GoodImg width="2rem" src={rewardIcon} />
        <div>Rewards</div>
        <GoodImg width="1rem" src={rightArrowIcon} />
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 0 1rem;
        margin-top: 3.5rem;
      }
      .info {
        margin-left: -8rem;
      }
      .profile-bar {
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
      }
      .group {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: auto;
        grid-row-gap: 0.5rem;
      }
      .element {
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;
        color: black;
        font-size: 0.9rem;
        min-height: 3rem;
      }
    `}</style>
  </div>
);

export default PageProfile;
