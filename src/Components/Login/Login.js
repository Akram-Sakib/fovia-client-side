import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import graphicImage from "./../../Images/login-page.jpg";
import whiteLogo from "./../../Images/white-logo.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    SignInUsingGoogle,
    signInUsingEmailAndPassword,
    setUser,
    setIsLoading,
    saveUser,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location?.state?.from || "/home";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    signInUsingEmailAndPassword(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setUser(user);
        navigate(redirect_uri);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  const handleGoogleSignIn = () => {
    SignInUsingGoogle()
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setUser(user);
        navigate(redirect_uri);
      })
      .catch((error) => {
        // const errorMessage = error.message;
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Container fluid>
      <section className="login_registrationPage">
        <div className="form-body">
          <div className="website-logo">
            <a href="index.html">
              <div className="logo">
                <img className="logo-size" src={whiteLogo} alt="" />
              </div>
            </a>
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
                      <button class="custom-btn btn-1">Login</button>
                    </Link>
                    <Link to="/registration">
                        <button class="custom-btn btn-1">Register</button>
                    </Link>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="E-mail Address"
                      onBlur={handleEmail}
                      required
                    />
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onBlur={handlePassword}
                      required
                    />
                    <div className="form-button">
                      <button
                        onClick={handleLogin}
                        id="submit"
                        type="submit"
                        className="ibtn"
                      >
                        Login
                      </button>{" "}
                      <a href="forget8.html">Forget password?</a>
                    </div>
                  </form>
                  <div className="other-links">
                    <span>Or login with</span>
                    <Button onClick={handleGoogleSignIn} variant="light">
                      Google<i className="fab fa-google"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </Container>
  );
};

export default Login;
