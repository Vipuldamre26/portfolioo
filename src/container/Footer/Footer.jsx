import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Footer = () => {

  const [loading, setLoading] = useState(false);
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "bf955e0c-a750-477b-917b-d2b4fbb08505";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      setLoading(true);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });


  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:vipuldamre06@gmail.com" className="p-text">vipuldamre06@gmail.com</a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div> */}
      </div>

      {

      !loading ? 
      
      (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>

        <input className="p-text" type="text" placeholder="Your Name" name="username" {...register("name", { required: true })} />
        <input className="p-text" type="email" placeholder="Your Email" name="email" {...register("email", { required: true })} />
        <textarea
          className="p-text"
          placeholder="Your Message"
          name="message"
          {...register("message", { required: true })}
        />

        <button type="submit" className="p-text" >{!loading ? 'Send Message' : 'Sending...'}</button>
      </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )

      }




    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);