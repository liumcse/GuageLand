import React from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Background from "@common/assets/pic/Land/background.png";
import Land from "@common/assets/pic/Land/land.png";
import House6 from "@common/assets/pic/Land/lv3_1.png";
import House7 from "@common/assets/pic/Land/lv3_2.png";
import House8 from "@common/assets/pic/Land/lv3_3.png";
import LvlBoard6 from "@common/assets/pic/Land/level_board/lv3_1_board.png";
import LvlBoard7 from "@common/assets/pic/Land/level_board/lv3_2_board.png";
import LvlBoard8 from "@common/assets/pic/Land/level_board/lv3_3_board.png";
import RewardIcon from "@common/assets/icons/reward_points_icon.png";

const LEVEL_PIC_MAPPING = {
  6: LvlBoard6,
  7: LvlBoard7,
  8: LvlBoard8
};

const HOUSE_PIC_MAPPING = {
  6: House6,
  7: House7,
  8: House8
};

class PageHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 6,
      reward: 400
    };
    this.houseImg = React.createRef();
    this.lvlImg = React.createRef();
  }

  levelUp = () => {
    if (this.state.reward >= 200) {
      this.houseImg.current.classList.remove("init", "apply-jelly");
      this.lvlImg.current.classList.remove("init", "apply-jelly");
      setTimeout(() => {
        this.setState({
          ...this.state,
          level: this.state.level + 1,
          reward: this.state.reward - 200
        });
        this.lvlImg.current.classList.add("apply-jelly");
        this.houseImg.current.classList.add("apply-jelly");
      }, 500);
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
          <img
            className="house-img init apply-jelly"
            src={HOUSE_PIC_MAPPING[this.state.level]}
            ref={this.houseImg}
          />
          <img className="land-img apply-slidein" src={Land} />
        </div>

        <Link to={"/housecarousel?level=" + this.state.level}>
          <img
            className="lvl-img init apply-jelly"
            src={LEVEL_PIC_MAPPING[this.state.level]}
            ref={this.lvlImg}
          />
        </Link>
        <style jsx>
          {`
            .container {
              overflow: hidden;
            }
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
              height: 40rem;
            }
            .house-img {
              width: 75vw;
              position: absolute;
              top: 2.5rem;
              left: 2.5rem;
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

            .apply-slidein {
              -webkit-animation: slidein 500ms cubic-bezier(0.4, 0, 0.2, 1) none;
              animation: slidein 500ms cubic-bezier(0.4, 0, 0.2, 1) none;
            }

            @-webkit-keyframes slidein {
              from {
                margin-top: 100%;
              }
              to {
                margin-top: 0%;
              }
            }
            @keyframes slidein {
              from {
                margin-top: 100%;
              }
              to {
                margin-top: 0%;
              }
            }

            .apply-jelly {
              -webkit-animation: jelly 1000ms linear both;
              animation: jelly 1000ms linear both;
            }

            .init.apply-jelly {
              animation-delay: 500ms;
            }

            /* Generated with Bounce.js. Edit at https://goo.gl/wlQiUY */

            @-webkit-keyframes jelly {
              0% {
                -webkit-transform: matrix3d(
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              3.4% {
                -webkit-transform: matrix3d(
                  0.316,
                  0,
                  0,
                  0,
                  0,
                  0.316,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.316,
                  0,
                  0,
                  0,
                  0,
                  0.316,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              4.7% {
                -webkit-transform: matrix3d(
                  0.45,
                  0,
                  0,
                  0,
                  0,
                  0.45,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.45,
                  0,
                  0,
                  0,
                  0,
                  0.45,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              6.81% {
                -webkit-transform: matrix3d(
                  0.659,
                  0,
                  0,
                  0,
                  0,
                  0.659,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.659,
                  0,
                  0,
                  0,
                  0,
                  0.659,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              9.41% {
                -webkit-transform: matrix3d(
                  0.883,
                  0,
                  0,
                  0,
                  0,
                  0.883,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.883,
                  0,
                  0,
                  0,
                  0,
                  0.883,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              10.21% {
                -webkit-transform: matrix3d(
                  0.942,
                  0,
                  0,
                  0,
                  0,
                  0.942,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.942,
                  0,
                  0,
                  0,
                  0,
                  0.942,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              13.61% {
                -webkit-transform: matrix3d(
                  1.123,
                  0,
                  0,
                  0,
                  0,
                  1.123,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.123,
                  0,
                  0,
                  0,
                  0,
                  1.123,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              14.11% {
                -webkit-transform: matrix3d(
                  1.141,
                  0,
                  0,
                  0,
                  0,
                  1.141,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.141,
                  0,
                  0,
                  0,
                  0,
                  1.141,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              17.52% {
                -webkit-transform: matrix3d(
                  1.208,
                  0,
                  0,
                  0,
                  0,
                  1.208,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.208,
                  0,
                  0,
                  0,
                  0,
                  1.208,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              18.72% {
                -webkit-transform: matrix3d(
                  1.212,
                  0,
                  0,
                  0,
                  0,
                  1.212,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.212,
                  0,
                  0,
                  0,
                  0,
                  1.212,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              21.32% {
                -webkit-transform: matrix3d(
                  1.196,
                  0,
                  0,
                  0,
                  0,
                  1.196,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.196,
                  0,
                  0,
                  0,
                  0,
                  1.196,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              24.32% {
                -webkit-transform: matrix3d(
                  1.151,
                  0,
                  0,
                  0,
                  0,
                  1.151,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.151,
                  0,
                  0,
                  0,
                  0,
                  1.151,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              25.23% {
                -webkit-transform: matrix3d(
                  1.134,
                  0,
                  0,
                  0,
                  0,
                  1.134,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.134,
                  0,
                  0,
                  0,
                  0,
                  1.134,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              29.03% {
                -webkit-transform: matrix3d(
                  1.063,
                  0,
                  0,
                  0,
                  0,
                  1.063,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.063,
                  0,
                  0,
                  0,
                  0,
                  1.063,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              29.93% {
                -webkit-transform: matrix3d(
                  1.048,
                  0,
                  0,
                  0,
                  0,
                  1.048,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.048,
                  0,
                  0,
                  0,
                  0,
                  1.048,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              35.54% {
                -webkit-transform: matrix3d(
                  0.979,
                  0,
                  0,
                  0,
                  0,
                  0.979,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.979,
                  0,
                  0,
                  0,
                  0,
                  0.979,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              36.74% {
                -webkit-transform: matrix3d(
                  0.972,
                  0,
                  0,
                  0,
                  0,
                  0.972,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.972,
                  0,
                  0,
                  0,
                  0,
                  0.972,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              41.04% {
                -webkit-transform: matrix3d(
                  0.961,
                  0,
                  0,
                  0,
                  0,
                  0.961,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.961,
                  0,
                  0,
                  0,
                  0,
                  0.961,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              44.44% {
                -webkit-transform: matrix3d(
                  0.966,
                  0,
                  0,
                  0,
                  0,
                  0.966,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.966,
                  0,
                  0,
                  0,
                  0,
                  0.966,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              52.15% {
                -webkit-transform: matrix3d(
                  0.991,
                  0,
                  0,
                  0,
                  0,
                  0.991,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.991,
                  0,
                  0,
                  0,
                  0,
                  0.991,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              59.86% {
                -webkit-transform: matrix3d(
                  1.006,
                  0,
                  0,
                  0,
                  0,
                  1.006,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.006,
                  0,
                  0,
                  0,
                  0,
                  1.006,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              63.26% {
                -webkit-transform: matrix3d(
                  1.007,
                  0,
                  0,
                  0,
                  0,
                  1.007,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.007,
                  0,
                  0,
                  0,
                  0,
                  1.007,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              75.28% {
                -webkit-transform: matrix3d(
                  1.001,
                  0,
                  0,
                  0,
                  0,
                  1.001,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.001,
                  0,
                  0,
                  0,
                  0,
                  1.001,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              85.49% {
                -webkit-transform: matrix3d(
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              90.69% {
                -webkit-transform: matrix3d(
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              100% {
                -webkit-transform: matrix3d(
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
            }

            @keyframes jelly {
              0% {
                -webkit-transform: matrix3d(
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              3.4% {
                -webkit-transform: matrix3d(
                  0.316,
                  0,
                  0,
                  0,
                  0,
                  0.316,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.316,
                  0,
                  0,
                  0,
                  0,
                  0.316,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              4.7% {
                -webkit-transform: matrix3d(
                  0.45,
                  0,
                  0,
                  0,
                  0,
                  0.45,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.45,
                  0,
                  0,
                  0,
                  0,
                  0.45,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              6.81% {
                -webkit-transform: matrix3d(
                  0.659,
                  0,
                  0,
                  0,
                  0,
                  0.659,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.659,
                  0,
                  0,
                  0,
                  0,
                  0.659,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              9.41% {
                -webkit-transform: matrix3d(
                  0.883,
                  0,
                  0,
                  0,
                  0,
                  0.883,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.883,
                  0,
                  0,
                  0,
                  0,
                  0.883,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              10.21% {
                -webkit-transform: matrix3d(
                  0.942,
                  0,
                  0,
                  0,
                  0,
                  0.942,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.942,
                  0,
                  0,
                  0,
                  0,
                  0.942,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              13.61% {
                -webkit-transform: matrix3d(
                  1.123,
                  0,
                  0,
                  0,
                  0,
                  1.123,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.123,
                  0,
                  0,
                  0,
                  0,
                  1.123,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              14.11% {
                -webkit-transform: matrix3d(
                  1.141,
                  0,
                  0,
                  0,
                  0,
                  1.141,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.141,
                  0,
                  0,
                  0,
                  0,
                  1.141,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              17.52% {
                -webkit-transform: matrix3d(
                  1.208,
                  0,
                  0,
                  0,
                  0,
                  1.208,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.208,
                  0,
                  0,
                  0,
                  0,
                  1.208,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              18.72% {
                -webkit-transform: matrix3d(
                  1.212,
                  0,
                  0,
                  0,
                  0,
                  1.212,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.212,
                  0,
                  0,
                  0,
                  0,
                  1.212,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              21.32% {
                -webkit-transform: matrix3d(
                  1.196,
                  0,
                  0,
                  0,
                  0,
                  1.196,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.196,
                  0,
                  0,
                  0,
                  0,
                  1.196,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              24.32% {
                -webkit-transform: matrix3d(
                  1.151,
                  0,
                  0,
                  0,
                  0,
                  1.151,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.151,
                  0,
                  0,
                  0,
                  0,
                  1.151,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              25.23% {
                -webkit-transform: matrix3d(
                  1.134,
                  0,
                  0,
                  0,
                  0,
                  1.134,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.134,
                  0,
                  0,
                  0,
                  0,
                  1.134,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              29.03% {
                -webkit-transform: matrix3d(
                  1.063,
                  0,
                  0,
                  0,
                  0,
                  1.063,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.063,
                  0,
                  0,
                  0,
                  0,
                  1.063,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              29.93% {
                -webkit-transform: matrix3d(
                  1.048,
                  0,
                  0,
                  0,
                  0,
                  1.048,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.048,
                  0,
                  0,
                  0,
                  0,
                  1.048,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              35.54% {
                -webkit-transform: matrix3d(
                  0.979,
                  0,
                  0,
                  0,
                  0,
                  0.979,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.979,
                  0,
                  0,
                  0,
                  0,
                  0.979,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              36.74% {
                -webkit-transform: matrix3d(
                  0.972,
                  0,
                  0,
                  0,
                  0,
                  0.972,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.972,
                  0,
                  0,
                  0,
                  0,
                  0.972,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              41.04% {
                -webkit-transform: matrix3d(
                  0.961,
                  0,
                  0,
                  0,
                  0,
                  0.961,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.961,
                  0,
                  0,
                  0,
                  0,
                  0.961,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              44.44% {
                -webkit-transform: matrix3d(
                  0.966,
                  0,
                  0,
                  0,
                  0,
                  0.966,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.966,
                  0,
                  0,
                  0,
                  0,
                  0.966,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              52.15% {
                -webkit-transform: matrix3d(
                  0.991,
                  0,
                  0,
                  0,
                  0,
                  0.991,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.991,
                  0,
                  0,
                  0,
                  0,
                  0.991,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              59.86% {
                -webkit-transform: matrix3d(
                  1.006,
                  0,
                  0,
                  0,
                  0,
                  1.006,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.006,
                  0,
                  0,
                  0,
                  0,
                  1.006,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              63.26% {
                -webkit-transform: matrix3d(
                  1.007,
                  0,
                  0,
                  0,
                  0,
                  1.007,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.007,
                  0,
                  0,
                  0,
                  0,
                  1.007,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              75.28% {
                -webkit-transform: matrix3d(
                  1.001,
                  0,
                  0,
                  0,
                  0,
                  1.001,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1.001,
                  0,
                  0,
                  0,
                  0,
                  1.001,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              85.49% {
                -webkit-transform: matrix3d(
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              90.69% {
                -webkit-transform: matrix3d(
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  0.999,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
              100% {
                -webkit-transform: matrix3d(
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
                transform: matrix3d(
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1
                );
              }
            }
          `}
        </style>
      </div>
    );
  }
}
// cubic-bezier(.4,0,.2,1)
export default PageHouse;
