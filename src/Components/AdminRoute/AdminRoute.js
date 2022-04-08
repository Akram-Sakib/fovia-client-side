import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user,admin, isLoading } = useAuth();
  let location = useLocation();

  console.log(admin);

  if (isLoading) {
    return (
      <Container>
        <Row className="py-5">
          <Spinner className="mx-auto" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }

  if ((!user?.email) || (!admin)) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  return children;
};

export default AdminRoute;
