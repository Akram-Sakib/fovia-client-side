import Footer from "./../../Components/Shared/Footer/Footer";
import Header from "./../../Components/Shared/Header/Header";
import bgMap from "./../../Images/bg-map.png";
import "./Contact.css";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {

  const handleSubmit = (e)=>{
    e.preventDefault()
    toast.success("Message successfully!");
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Header />
      <section className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Send Message</span>
            <h2>Drop us message for any query</h2>
            <p>If you have an idea, we would love to hear about it.</p>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="contact-form">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please enter your name"
                          placeholder="Name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your email"
                          placeholder="Email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          required
                          data-error="Please enter your number"
                          className="form-control"
                          placeholder="Phone"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          className="form-control"
                          required
                          data-error="Please enter your subject"
                          placeholder="Subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="6"
                          required
                          data-error="Write your message"
                          placeholder="Your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message <i class="fas fa-chevron-right"></i>
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="contact-info">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span>Address</span>
                    CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909,
                    Canada
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span>Email</span>
                    <a href="mailto:sayedakramsakib@gmail.com">
                      sayedakramsakib@gmail.com
                    </a>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-volume"></i>
                    </div>
                    <span>Phone</span>
                    <a href="tel:+8801631907635">+880 16319 07635</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-map">
          <img src={bgMap} alt="Background Map" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
