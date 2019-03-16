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
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
          <br />
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
          <br />
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
          <br />
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
          <br />
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
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
        background-color: #52b3fb;
        width: 100%;
        color: white;
        display: flex;
        justify-content: space-around;
        height: 3rem;
        color: white;
        align-items: center;
      }
    `}</style>
  </div>
);

export default PageArticle;
