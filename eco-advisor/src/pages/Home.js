import React from 'react';
import Hero from '../components/landingpage/Hero';
import Navbar from '../components/landingpage/Navbar';
// import Features from '../components/landingpage/Features';
// import { Content } from '../components/landingpage/Content';
// import { Pricing } from '../components/landingpage/Pricing';
import { Footer } from '../components/landingpage/Footer';
import { ContentOne } from '../components/landingpage/ContentOne';
import { ContentTwo } from '../components/landingpage/ContentTwo';


const Home = () => 
// {/* <LandingPage />; */}
{
    return (
      
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <ContentOne></ContentOne>
        <ContentTwo></ContentTwo>
        <Footer></Footer>
      </div>
    );
  };

export default Home;
