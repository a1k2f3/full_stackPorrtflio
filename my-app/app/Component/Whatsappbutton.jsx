import React from 'react'
import Image from 'next/image';
const Whatsappbutton = () => {
  return (
    
      <a
      href="https://wa.me/+923117687149" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        alt="Chat on WhatsApp"
        className="w-12 h-12"
      />
    </a>

  )
}

export default Whatsappbutton
