import React from 'react';
import whatsappLogo from "../components/Pictures/whatsapp.png";

function Whatsapp() {
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 ,zIndex:"9"}}>
      <a
        href="https://wa.me/917673973425?text=Hello%20How%20can%20I%20help%20you?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappLogo} width="45" height="45" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default Whatsapp;
