import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import graphicImage from "./../../Images/graphic4.svg";
import whiteLogo from "./../../Images/white-logo.png";

const Registration = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {regestrationWithEmailPassword} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };

    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

    const handleRegistration = () => {
      regestrationWithEmailPassword(name,email, password);
      navigate("/home");
    }

  return (
    <Container fluid>
      <section className="login_registrationPage">
        <div className="form-body">
          <div className="website-logo">
            <Link to="/">
              <div className="logo">
                <img className="logo-size" src={whiteLogo} alt="" />
              </div>
            </Link>
          </div>
          <Row>
            <div className="img-holder">
              <div className="bg"></div>
              <div className="info-holder">
                <h3>Get more things done with Loggin platform.</h3>
                <p>
                  Access to the most powerfull tool in the entire design and web
                  industry.
                </p>
                <img src={graphicImage} alt="" />
              </div>
            </div>
            <div className="form-holder">
              <div className="form-content">
                <div className="form-items">
                  <div className="website-logo-inside">
                    <Link to="/">
                      <div className="logo">
                        <img className="logo-size" src={whiteLogo} alt="" />
                      </div>
                    </Link>
                  </div>
                  <div className="page-links">
                    <Link to="/login">
                      <span className="active">Login</span>
                    </Link>
                    <Link to="/registration">
                      <span>Register</span>
                    </Link>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Full Name"
                      onBlur={handleName}
                    />
                    <input
                      className="form-control"
                      type="email"
                      placeholder="E-mail Address"
                      onBlur={handleEmail}
                      required
                    />
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      onBlur={handlePassword}
                      required
                    />
                    <div className="form-button">
                      <button
                        onClick={handleRegistration}
                        id="submit"
                        type="submit"
                        className="ibtn"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </Container>
  );
};

export default Registration;
