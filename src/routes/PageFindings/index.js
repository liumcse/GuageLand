import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Findings from "@components/Findings";

const generateArticle = () =>
  [0, 1, 2, 3, 4, 5].map((_, index) => (
    <Card className="card" key={_ + index}>
      <CardActionArea>
        <Link to="/article/test-article">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to="/article/test-article">
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  ));

const PageFindings = () => (
  <div className="container">
    <Findings />
    <div className="cards">{generateArticle()}</div>
    <style jsx>
      {`
      .cards {
        display: flex-root;
        padding-bottom: 5rem;
      }
      .card {
        width: 90%;
        margin-top: 1rem;
      },
      `}
    </style>
  </div>
);

export default PageFindings;
