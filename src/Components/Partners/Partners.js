import "./Partners.css";

import partnerImg1 from "./../../Images/Partners/partner1.png";
import partnerImg2 from "./../../Images/Partners/partner2.png";
import partnerImg3 from "./../../Images/Partners/partner3.png";
import { default as partnerImg4, default as partnerImg5 } from "./../../Images/Partners/partner5.png";
import partnerImg6 from "./../../Images/Partners/partner6.png";
import partnerImg7 from "./../../Images/Partners/partner7.png";
import partnerImg8 from "./../../Images/Partners/partner8.png";
import partnerImg9 from "./../../Images/Partners/partner9.png";

const Partners = () => {
  return (
    <section className="partner-area ptb-100 bg-f4f9fd">
      <div className="container">
        <div className="section-title">
          <h2>Featured Customers &amp; Partners</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="customers-partner-list">
          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg1} alt="Partner Pic" />
            </a>
          </div>

          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg2} alt="Partner Pic" />
            </a>
          </div>

          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg3} alt="Partner Pic" />
            </a>
          </div>

          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg4} alt="Partner Pic" />
            </a>
          </div>

          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg5} alt="Partner Pic" />
            </a>
          </div>

          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg6} alt="Partner Pic" />
            </a>
          </div>

          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg7} alt="Partner Pic" />
            </a>
          </div>

          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg8} alt="Partner Pic" />
            </a>
          </div>

          <div className="partner-item">
            <a href="/#">
              <img src={partnerImg9} alt="Partner Pic" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
