"use client"
import React, { useState } from 'react';
import background1 from '@/public/design/background3.svg'
import logo from '@/public/design/logo.svg'
import Image from "next/image";
import button1 from '@/public/design/registration/login.svg'
import Link from 'next/link';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    emailAddress: '',
    password: '',
  });

  const handleChange = (event:any) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? event.target.checked : value,
    }));
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();

    // Form validation (add your desired validation logic here)
    if (!validateForm(formData)) {
      return; // Handle validation errors if needed
    }

    // Handle form submission (e.g., send to API, store locally)
    console.log('Form data:', formData); // Replace with your submission logic

    // Reset form if desired
    setFormData({
      userName: '',
      emailAddress: '',
      password: ''
    });
  };

  // Add custom validation logic for various fields (optional)
  const validateForm = (data:any) => {
    // Implement password strength check, email format validation, etc.
    // Return true if valid, false if invalid
    return true; // Replace with your validation logic
  };

  return (
    <div className="w-full h-[125vh] overflow-hidden" style={{ backgroundImage: `url(${background1.src})`,backgroundRepeat:'no-repeat', backgroundPosition:"top" }}>
    <div>
      <Image 
      src={logo}
      alt="logo"
      />
    </div>
    <form onSubmit={handleSubmit} className='p-[40px] max-w-[651px] m-auto flex flex-col items-center' style={{position:"relative",  background: `rgba(255, 255, 255, 0.25)`}}>

    <div className='w-full'>
    <p className='text-[white] mb-[10px] ml-[10px]'>User Name</p>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.userName}
        onChange={handleChange}
        className='w-full p-[10px] mb-[20px]'
        style={{border:"1px solid white",borderRadius:"25px", background:"rgba(255, 255, 255, 0.25)"}}
        required
      />
      
    </div>

    <div className='w-full'>
    <p className='text-[white] mb-[10px] ml-[10px] w-full'>Password</p>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className='w-full p-[10px] mb-[20px]'
        style={{border:"1px solid white",borderRadius:"25px", background:"rgba(255, 255, 255, 0.25)"}}
        required
      />
    </div>

      <p className='text-[white] w-full'>go back</p>
      <Link href="/main"  type="submit" className='mt-[10px] w-[300px] h-[72px] m-auto'><Image className="button1" src={button1} alt=""/></Link>
    </form>
    </div>

  );
};

export default RegistrationForm;
