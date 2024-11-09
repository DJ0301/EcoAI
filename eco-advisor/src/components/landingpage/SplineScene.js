// SplineScene.js
import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  const apiKey = process.env.REACT_APP_GROQ_API_KEY; // Access API key

  return (
    <div>
      {/* You can log or use the API key if needed */}
      {apiKey && (
        <Spline scene="https://prod.spline.design/Lsrs5MnzxVazNdZ4/scene.splinecode" />
      )}
    </div>
  );
}