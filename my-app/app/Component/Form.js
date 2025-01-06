"use client"
import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    try {
      const values = { name,email, subject, message };
      const data = await fetch("http://localhost:5000/send-email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const response = await data.json();
      console.log('Response:', response);
  
      // Reset form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };
  

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <h2 className='text-center text-[30px] font-bold mb-6'>Contact Me</h2>
        <hr />

        <div className='w-full flex flex-col justify-center items-center mt-8'>

          <div className="flex flex-col gap-4 w-full">
            {/* Name and Email Fields */}
            <div className="flex gap-4 justify-center flex-wrap">
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className='p-2 drop-shadow-xl w-60 md:w-100 sm:w-100 text-black'
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className='p-2 drop-shadow-xl w-60 md:w-100 sm:w-100 text-black' 
              />
            </div>

            {/* Subject Field */}
            <div className="w-full flex justify-center">
              <input 
                type="text" 
                placeholder="Subject" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                className='p-2 drop-shadow-xl w-[80%] text-black'
              />
            </div>

            {/* Message Field */}
            <div className="w-full flex justify-center">
              <textarea 
                placeholder="Message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className='p-2 drop-shadow-xl w-[80%] h-32 text-black'
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit} 
            className='w-100 mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:ease-linear duration-100'>
            Submit
          </button>
        </div>

        
      </div>
    </>
  );
}

export default Form;
