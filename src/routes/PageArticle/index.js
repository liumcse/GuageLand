import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import loveIcon from "@common/assets/icons/favorite.png";
import shareIcon from "@common/assets/icons/paper_plane.png";
import GoodImg from "@components/GoodImg";

const PageArticle = () => (
  <div className="container">
    <div className="card-container">
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Word of the Day - "I Love You”
          </Typography>
          <Typography component="p">
            <small>
              Posted by <strong>Navajo</strong>
            </small>
          </Typography>
          <br />
          <Typography component="p">
            Since today is Valentine's Day, I decided to make today's Navajo
            Word of the Day
          </Typography>
          <br />
          <Typography component="p">"Ayóó'ánííníshní,”</Typography>
          <br />
          <Typography component="p">which means,</Typography>
          <br />
          <Typography component="p">"I Love You!"</Typography>
        </CardContent>
      </Card>
    </div>
    <div className="bottom-bar">
      <GoodImg width="2rem" height="2rem" src={loveIcon} />
      <GoodImg width="2rem" height="2rem" src={shareIcon} />
    </div>
    <style jsx>{`
      .container {
        padding-bottom: 5rem;
      }
      .card-container {
        padding: 0.5rem;
        padding-top: 2.5rem;
      }
      .bottom-bar {
        position: fixed;
        bottom: 3.5rem;
        background-color: #66a5d4;
        width: 100%;
        color: white;
        display: flex;
        justify-content: space-around;
        height: 3.5rem;
        color: white;
        align-items: center;
      }
    `}</style>
  </div>
);

export default PageArticle;
