import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../../Components/Doctors/Doctors';
import FeedBack from '../../Components/FeedBack/FeedBack';
import Services from '../../Components/Services/Services';
import Header from "../../Components/Shared/Header/Header";
import Footer from "../../Components/Shared/Footer/Footer";
import Partners from '../../Components/Partners/Partners';

const Home = () => {
    return (
      <>
        <Header />
        <main>
          <Banner></Banner>
          <Services></Services>
          <Doctors />
          <AboutUs></AboutUs>
          <FeedBack />
          <Partners/>
        </main>
        <Footer/>
      </>
    );
};

export default Home;