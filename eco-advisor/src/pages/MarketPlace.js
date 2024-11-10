import React from 'react';
import Navbar from '../components/landingpage/Navbar';
import { ProductCard } from '../components/marketplace/ProductCard';
import { Footer } from '../components/landingpage/Footer';


const Chatpage = () => 
// {/* <LandingPage />; */}
{
    return (
      
      <div>
        <Navbar></Navbar>
        <ProductCard></ProductCard>
        <Footer></Footer>
      </div>
    );
  };

export default Chatpage;
