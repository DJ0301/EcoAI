import React from 'react';
import Navbar from '../components/landingpage/Navbar';
import { EcoAdvisor } from '../components/EcoAdvisor';
import { Footer } from '../components/landingpage/Footer';


const Chatpage = () => 
// {/* <LandingPage />; */}
{
    return (
      
      <div>
        <Navbar></Navbar>
        <EcoAdvisor></EcoAdvisor>
        <Footer></Footer>
      </div>
    );
  };

export default Chatpage;