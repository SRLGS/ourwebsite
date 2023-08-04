import React from 'react';
import Lottie from "lottie-react";
import creatinganimation from "./creatinganimation.json"
import "./index.css"

const WhatsAppIntegration = () => {
  
  const handleWhatsAppClick = () => {
    const phoneNumber = '7093420691';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <Lottie
      className="whatsAppImage"
      onClick={handleWhatsAppClick}
        animationData={creatinganimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default WhatsAppIntegration;
