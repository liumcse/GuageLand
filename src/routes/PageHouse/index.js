import React from "react";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Background from "@common/assets/pic/Land/background.png";
import Land from "@common/assets/pic/Land/land.png";
import House from "@common/assets/pic/Land/lv1_1.png";
import LvlBoard1 from "@common/assets/pic/Land/level_board/lv1_1_board.png";
import LvlBoard2 from "@common/assets/pic/Land/level_board/lv1_2_board.png";
import LvlBoard3 from "@common/assets/pic/Land/level_board/lv1_3_board.png";
import RewardIcon from "@common/assets/icons/reward_points_icon.png";
import GoodImg from "@components/GoodImg";

const LEVEL_PIC_MAPPING = {
  1: LvlBoard1,
  2: LvlBoard2,
  3: LvlBoard3
};

class PageHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      reward: 400
    };
  }

  levelUp = () => {
    if (this.state.reward >= 200) {
      this.setState({
        ...this.state,
        level: this.state.level + 1,
        reward: this.state.reward - 200
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="lvl-btn" onClick={this.levelUp}>
          <Button variant="contained" color="secondary">
            Level Up
          </Button>
        </div>
        <div className="reward-btn">
          <Fab disabled variant="extended" id="reward-tag">
            <img src={RewardIcon} className="reward-icon" />
            {this.state.reward}
          </Fab>
        </div>

        <img className="background-img" src={Background} />
        <div className="house-land-img">
          <img className="house-img" src={House} />
          <img className="land-img" src={Land} />
        </div>

        <img className="lvl-img" src={LEVEL_PIC_MAPPING[this.state.level]} />
        <style jsx>
          {`
            .background-img {
              position: absolute;
              height: 100vh;
              width: 100vw;
            }
            .house-land-img {
              position: absolute;
              top: 2rem;
            }
            .land-img {
              width: 100vw;
              width: 100vw;
              height: 40rem;
            }
            .house-img {
              width: 100vw;
              position: absolute;
              top: 2.5rem;
              z-index: 2;
            }
            .lvl-btn {
              position: absolute;
              right: 1rem;
              top: 1rem;
              z-index: 2;
            }
            .lvl-img {
              position: absolute;
              width: 80vw;
              bottom: 0;
              left: 3rem;
            }
            .reward-btn {
              position: absolute;
              right: 0;
              /* width: 100vw; */
              z-index: 1;
              top: 0.7rem;
              left: 1rem;
            }
            .reward-icon {
              height: 48px;
              position: relative;
              left: -1rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default PageHouse;
