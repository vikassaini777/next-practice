import React, { useState } from "react";
import Home from "./index";
import Layout from './Layout'
import Card from "@material-ui/core/Card";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
import Title from "../static/StyledComponents/title";
import Button from "../static/StyledComponents/button";
const TaskLogin = props => {
  const [carouselitems, setItem] = useState([
    { image: "/images/carousel1.png" },
    { image: "/images/carousel2.png" },
    { image: "/images/carousel3.png" }
  ]);
  const useStyles = makeStyles(theme => ({
    card: {
      width: 700,
      height: 450,
      margin: "80px 197px",
      borderRadius: "15px"
      //   padding: "10%"
    },
    media: {
      height: 450,
      paddingTop: "56.25%" // 16:9
    },
    cardcontent: {
      marginTop: "30%"
    }
  }));
  const classes = useStyles();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <Layout>
    <div className="container">
      <div className="row text-center">
        <Cards>
          <div className="jumbotron card-jumbotron">
            <Card className={classes.card}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="container">
                    <CardContent className={classes.cardcontent}>
                      <form>
                        <Title>Create account</Title>
                        <div className="form-group">
                          <TextField label="Email" fullWidth />
                        </div>
                        <div className="form-group">
                          <TextField label="Password" fullWidth />
                        </div>
                        <div className="row ">
                          <div className="col-md-12 col-sm-12 col-lg-12 col-12 text-center">
                            <Button>Signup</Button>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-md-12 col-sm-12 col-lg-12 col-12 text-center">
                            <p className="card-p">
                              Already have an account?{" "}
                              <span className="login-here">Log in here </span>
                            </p>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    showDots={true}
                    arrowa={false}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    infinite={true}
                  >
                    {carouselitems.map((item, index) => {
                      return (
                        <CardMedia
                          image={item.image}
                          className={classes.media}
                        ></CardMedia>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </Card>
          </div>
        </Cards>
      </div>
    </div>
    </Layout>
  );
};
export default TaskLogin;