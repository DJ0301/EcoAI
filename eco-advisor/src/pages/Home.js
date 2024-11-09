import React from 'react';
import Hero from '../components/landingpage/Hero';
import Navbar from '../components/landingpage/Navbar';
import { Herotwo } from '../components/landingpage/Herotwo';
// import Features from '../components/landingpage/Features';
// import { Content } from '../components/landingpage/Content';
// import { Pricing } from '../components/landingpage/Pricing';
import { Footer } from '../components/landingpage/Footer';
import { ContentOne } from '../components/landingpage/ContentOne';
import { ContentTwo } from '../components/landingpage/ContentTwo';
import Reviews from '../components/landingpage/Reviews';

const Home = () => 
// {/* <LandingPage />; */}
{
    return (
      
      <div>
        <Navbar></Navbar>
        <Herotwo></Herotwo>
        <ContentOne></ContentOne>

        {/* <Reviews></Reviews> */}
        <Hero></Hero>
        <ContentTwo></ContentTwo>
        <Footer></Footer>
      </div>
    );
  };

export default Home;
