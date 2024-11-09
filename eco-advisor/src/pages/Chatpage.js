import React from 'react';
import Navbar from '../components/landingpage/Navbar';
import { Chatbot } from '../components/chatpagee/Chatbot';
import { EcoAdvisor } from '../components/EcoAdvisor';


const Chatpage = () => 
// {/* <LandingPage />; */}
{
    return (
      
      <div>
        <Navbar></Navbar>
        <EcoAdvisor></EcoAdvisor>
      </div>
    );
  };

export default Chatpage;
