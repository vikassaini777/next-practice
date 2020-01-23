import React, { useState } from "react";
import Layout from "./Layout";
import Home from "./index";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {Card} from "reactstrap";
import "../static/style.css";
import "../static/loginform.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
}));

const Login = () => {
  const [hide, UnHide] = useState(true);
  const classes = useStyles();
  return (
    <div>
      {/* <Title>Hello world</Title> */}
      <Layout>
        
        <div
          className="container form-container"
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <div className="row">
            <div className="container ">
              <div className="row">
                <div class="col-md-1 col-sm-1 col-1"></div>

                <div className="row col-md-10 cont-login-page">
                <div className="col-md-6 col-sm-6 col-10  log-form-div img-div">
                  <div className={classes.image}></div>
                  <img src="/images/login.png" className="login-img" />
                </div>

                <div className="col-md-6 col-sm-6 col-10 log-form-div">
                  <div className="login-form">
                    <h3 className="login_with">Login with</h3>
                    <hr className="hr-text hme-hrline" data-content="(or)" />
                    <p className="login-welcm"> Welcome! </p>

                    <form>
                      <div className="form-group">
                        <TextField
                          id="standard-basic"
                          label="Email"
                          name="email"
                          fullWidth
                        />
                      </div>

                      <div className="form-group">
                        <TextField
                          type={hide ? "password" : "text"}
                          label="Password"
                          name="password"
                          fullWidth
                        />
                        <div
                          className="eye-icon"
                          onClick={() => {
                            UnHide(!hide);
                          }}
                        >
                          {hide ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-secondary text-center"
                      >
                        LOGIN
                      </button>
                    </form>

                    <div className="row forgot-btn text-center">
                      <div className="col-md-12 col-sm-12 col-12">
                        <p className="log-for-pas">
                          <a>
                            <span className="log-signup forgot-pass">
                              {" "}
                              Forgot Password?
                            </span>
                          </a>
                        </p>
                        <p className="log-sign">
                          New to Fashopi ?
                          <a>
                            <span className="log-signup for-signup">
                              {" "}
                              Sign up{" "}
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                   
                  </div>
                </div>
                </div>

                <div class="col-md-1 col-sm-1 col-1"></div>
              </div>
           
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
