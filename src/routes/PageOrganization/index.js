import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logoIcon from "@common/assets/icons/logo.png";
import Title from "@common/assets/icons/Guageland_title.png";
import GoodImg from "@components/GoodImg";

const PageOrganization = () => {
  return (
    <div className="container">
      <div className="logo">
        <GoodImg src={logoIcon} width="10rem" />
      </div>
      <img className="title-image" src={Title} alt="title" />
        <div className="cards">
          <Card className="card">
            <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Word of the day
              </Typography>
                  <Typography component="p">
                    Since today is Valentine's Day... Let's see what is the word of
                    the day!
              </Typography>
                </CardContent>
           
            </CardActionArea>
            <CardActions className="action-btn">
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
        }
        .logo {
          border-radius: 10rem;
          margin-top: 2rem;
        }
     
        .title-image {
          width: 20rem;
          margin-top: 2rem;
          position: absolute;
          z-index: -1;
        }
        .cards {
          margin-top: 8rem;
        }
        .action-btn {
          display: flex;
          justify-content: space-evenly;
        }
      `}</style>
    </div>
  );
};

export default PageOrganization;
