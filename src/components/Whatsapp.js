import React from 'react';
import whatsappLogo from "../components/Pictures/whatsapp.png";

function Whatsapp() {
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 ,zIndex:"9"}}>
      <a
        href="https://wa.me/7569905524?text=Hi%20am%20looking%20for%20a%20property"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappLogo} width="45" height="45" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default Whatsapp;
