import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFoundImg from "./../../Images/404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <Container>
            <div className="error-content">
              <img src={notFoundImg} alt="error" />
              <h3>Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <Link to="/" className="btn btn-primary">
                Go to Home <i className="flaticon-right-chevron"></i>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
