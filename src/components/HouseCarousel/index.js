import React from "react";
import { range } from "lodash";
import { Card, CardContent, Typography } from "@material-ui/core/";
import Slider from "react-slick";
import House0 from "@common/assets/pic/Land/lv1_1.png";
import House1 from "@common/assets/pic/Land/lv1_2.png";
import House2 from "@common/assets/pic/Land/lv1_3.png";
import House3 from "@common/assets/pic/Land/lv2_1.png";
import House4 from "@common/assets/pic/Land/lv2_2.png";
import House5 from "@common/assets/pic/Land/lv2_3.png";
import House6 from "@common/assets/pic/Land/lv3_1.png";
import House7 from "@common/assets/pic/Land/lv3_2.png";
import House8 from "@common/assets/pic/Land/lv3_3.png";
import House9 from "@common/assets/pic/Land/lv4_1.png";
import House10 from "@common/assets/pic/Land/lv4_2.png";
import House11 from "@common/assets/pic/Land/lv4_3.png";
import House12 from "@common/assets/pic/Land/lv5_1.png";
import House13 from "@common/assets/pic/Land/lv5_2.png";
import House14 from "@common/assets/pic/Land/lv5_3.png";

const HouseCard = props => (
  <div className="container">
    <div className="card-container">
      <Card className="card">
        <CardContent>
          <div
            className={props.morePoints ? "locked" : ""}
            style={{ width: "" }}
          >
            <img src={props.image} />
          </div>
        </CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <div className="level-caption">Level {props.level}</div>
        </Typography>
        <Typography component="p">
          <div className="level-caption">
            {props.morePoints
              ? "You need " +
                props.morePoints +
                " more points to unlock this level"
              : "You have unlocked this level!"}
          </div>
        </Typography>
      </Card>
    </div>
    <style jsx>{`
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .container {
        padding-bottom: 5rem;
      }
      .card-container {
        padding: 0.5rem;
        padding-top: 2.5rem;
      }
      .locked {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
      .level-caption {
        text-align: center;
        padding: 16px;
      }
    `}</style>
  </div>
);

const houses = [
  House0,
  House1,
  House2,
  House3,
  House4,
  House5,
  House6,
  House7,
  House8,
  House9,
  House10,
  House11,
  House12,
  House13,
  House14
];

function numToLevel(n) {
  return Math.floor(n / 3) + 1 + "-" + ((n % 3) + 1);
}
const HouseCarousel = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: props.currLevel
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {range(0, props.currLevel + 1).map(x => {
          return (
            <HouseCard
              image={houses[x]}
              level={numToLevel(x)}
              key={"house" + x}
            />
          );
        })}
        {range(props.currLevel + 1, 15).map(x => {
          return (
            <HouseCard
              image={houses[x]}
              level={numToLevel(x)}
              morePoints={(x - props.currLevel) * 200}
              key={"house" + x}
            />
          );
        })}
      </Slider>
      <style jsx>{`
        .container {
          max-width: 80%;
          margin-left: 2.5rem;
          padding-top: 0.5rem;
          padding-bottom: 5rem;
          padding: auto;
        }
      `}</style>
    </div>
  );
};

export default HouseCarousel;
