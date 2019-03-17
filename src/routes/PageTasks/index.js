import React from "react";
import GoodImg from "@components/GoodImg";

import rewardIcon from "@common/assets/icons/reward_points_icon.png";
import taskIcon from "@common/assets/icons/task_icon.png";
import quizIcon from "@common/assets/icons/quiz_icon.png";
import paperPlaneIcon from "@common/assets/icons/paper_plane.png";
import dailyAttendanceIcon from "@common/assets/icons/daily_attendance.png";
import earthIcon from "@common/assets/icons/earth_button.png";
import chatbotIcon from "@common/assets/icons/chatbot.png";
import sharingIcon from "@common/assets/icons/sharing_icon.png";

const PageTasks = () => {
  return (
    <div className="container">
      <div className="reward">
        <GoodImg width="2rem" src={rewardIcon} />{" "}
        <span
          style={{
            backgroundColor: "white",
            padding: "0.25rem 1rem",
            borderRadius: "3px",
            marginLeft: "1rem"
          }}
        >
          200
        </span>
      </div>
      <div className="banner">
        <GoodImg width="2rem" src={taskIcon} style={{ marginRight: "1rem" }} />{" "}
        <div>Tasks on your land</div>
      </div>
      <div className="task-container">
        <div className="task">
          <GoodImg width="3rem" src={earthIcon} />
          <div>Explore a new language</div>
          <div className="icon-group">
            <GoodImg
              width="2rem"
              src={rewardIcon}
              style={{ marginRight: "0.5rem" }}
            />
            <div>10</div>
          </div>
        </div>
        <div className="task">
          <GoodImg width="3rem" src={chatbotIcon} />
          <div>Chat with bot</div>
          <div className="icon-group">
            <GoodImg
              width="2rem"
              src={rewardIcon}
              style={{ marginRight: "0.5rem" }}
            />
            <div>10</div>
          </div>
        </div>
        <div className="task">
          <GoodImg width="3rem" src={quizIcon} />
          <div>Quiz</div>
          <div className="icon-group">
            <GoodImg
              width="2rem"
              src={rewardIcon}
              style={{ marginRight: "0.5rem" }}
            />
            <div>15</div>
          </div>
        </div>
        <div className="task">
          <GoodImg width="3rem" src={paperPlaneIcon} />
          <div>Paper plane Wandering</div>
          <div className="icon-group">
            <GoodImg
              width="2rem"
              src={rewardIcon}
              style={{ marginRight: "0.5rem" }}
            />
            <div>30</div>
          </div>
        </div>
        <div className="task">
          <GoodImg width="3rem" src={sharingIcon} />
          <div>Share your language</div>
          <div className="icon-group">
            <GoodImg
              width="2rem"
              src={rewardIcon}
              style={{ marginRight: "0.5rem" }}
            />
            <div>50</div>
          </div>
        </div>
        <div className="task">
          <GoodImg width="3rem" src={sharingIcon} />
          <div>Make 2 new friends</div>
          <div className="icon-group">
            <GoodImg
              width="2rem"
              src={rewardIcon}
              style={{ marginRight: "0.5rem" }}
            />
            <div>99</div>
          </div>
        </div>
      </div>
      <div className="banner">
        {" "}
        <GoodImg
          width="2rem"
          src={taskIcon}
          style={{ marginRight: "1rem" }}
        />{" "}
        <div>Tasks completed</div>
      </div>
      <div className="task-container">
        <div className="task">
          <GoodImg width="3rem" src={dailyAttendanceIcon} />
          <div>Daily attendance: 17/03/2019</div>
          <div className="icon-group">
            <GoodImg
              width="2rem"
              src={rewardIcon}
              style={{ marginRight: "0.5rem" }}
            />
            <div>10</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          padding-bottom: 5rem;
          width: 100%;
        }
        .icon {
          border: none;
          padding: 0.5rem;
          border-radius: 0.5rem;
          background-color: white;
        }
        .reward {
          text-align: right;
          padding-right: 1rem;
          color: black;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: inherit;
          right: 0;
          top: 1rem;
        }
        .banner {
          background-color: #203864ff;
          position: initial;
          padding: 0.5rem 1rem;
          color: white;
          display: flex;
          align-items: center;
          margin-top: 2rem;
        }
        .task-container {
          display: grid;
          grid-template-columns: auto;
          grid-row-gap: 0.5rem;
          margin: 2rem 0;
        }
        .icon {
          margin-right: 1rem;
        }
        .task {
          background-color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          color: black;
          font-size: 0.9rem;
        }
        .icon-group {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default PageTasks;
