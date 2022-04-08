import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import {  useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const HospitalDetails = () => {

  const {detailsId} = useParams();
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/fakeServices.json")
      .then((res) => res.json())
      .then((result) => {
        setDetails(result);
      });
  }, []);

  const getDetails = details?.find((data) => data?.id === detailsId)
  
    return (
      <>
        <Header />

        <section className="details-section py-5">
          <Container>
            <Row>
              <Button onClick={() => navigate(-1)} variant="primary mb-5">
                Go Back
              </Button>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Img variant="top" src={getDetails?.img} />
                  <Card.Body>
                    <Card.Title>{getDetails?.name}</Card.Title>
                    <Card.Text>{getDetails?.desc}</Card.Text>
                    <Button variant="primary">Appoint</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    );
};

export default HospitalDetails;