import Service from "../Service/Service";
import "./Services.css";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Services = () => {

  return (
    <section className="service-section" id="services">
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <div className="section-title">
            <span>Main Features</span>
            <h2>Our Main Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Service />
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Services;
