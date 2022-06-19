import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./FeedBack.css";


const FeedBack = () => {
  const [nav1, setNav1] = useState({});
  const [nav2, setNav2] = useState({});

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("https://fovia.herokuapp.com/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);

  const settings_1 = {
    className: "slick-center",
    centerMode: true,
    pauseOnHover: true,
    centerPadding: "5px",
    slidesToShow: feedback.length > 5 ? 5 : feedback.length,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings_2 = {
    fade: true,
    pauseOnHover: true,
    infinite: true,
    speed: 900,
    slidesToShow: feedback.length > 5 ? 5 : feedback.length,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <section className="feedback-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Feedback</span>
            <h2>Our Happy Clients Says About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="feedback-slides">
            <div className="client-thumbnails">
              <div>
                <Slider
                  asNavFor={nav2}
                  slidesToShow={5}
                  ref={(slider1) => setNav1(slider1)}
                  {...settings_1}
                >
                  {feedback.map((data) => {
                    return (
                      <div className="item" key={data._id}>
                        <div className="img-fill">
                          <img
                            src={`data:image/jpeg;base64,${data?.image}`}
                            // src={data.img}
                            alt="client"
                            style={{ width: "85px", height: "90px" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>

            <div className="client-feedback">
              <div>
                <Slider
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  {...settings_2}
                >
                  {feedback.map((data) => {
                    return (
                      <div className="item" key={data._id}>
                        <div className="single-feedback">
                          <h3>{data.name}</h3>
                          <span>{data.title}</span>
                          <p>{data.feedback}</p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedBack;
