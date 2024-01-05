'use client';

import React, { useRef } from 'react';
import { useState } from 'react';
import '../styles/page.css';
import '../styles/globals.css';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useStyleRegistry } from 'styled-jsx';

const NewsletterForm = () => {
  const [input, setInput] = useState('');
  const [active, setActive] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [invalidResource, setInvalidResource] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // console.log(input);

  const buttonRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!email || !button) return;

    if (!active) {
      setActive(true);
    }
    //POST Request to /api/addsubscription
    const res = await fetch('/api/addSubscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log(data);

    if (
      data &&
      data.error &&
      data.error.title === 'Invalid Resource'
    ) {
      setInvalidResource(
        'Your email looks fake or invalid, please enter a real email address.'
      );
      setSuccessMessage(undefined);
      setErrorMessage(undefined);
      // console.log(data.error.title);
      // console.log(invalidResource);
      return;
    }

    if (data?.email_address) {
      setSuccessMessage('You have subscribed successfully!');
      setInvalidResource(undefined);
      setErrorMessage(undefined);
      console.log(data.email_address);
      return;
    }

    if (data.error) {
      setErrorMessage('Hey, you are already subscribed!');
      setSuccessMessage(undefined);
      setInvalidResource(undefined);
      console.log(data.error);
      return;
    }

    setSuccessMessage(data?.res);
  };

  // console.log(errorMessage);

  const dismissMessages = () => {
    setSuccessMessage(undefined);
    // setSuccessMessage('');
    setErrorMessage('');
    setInvalidResource('');
  };

  return (
    <div
      className="form_container grid place-items-center  
    px-5 xl:px-15 lg:pt-2 lg:px-14 md:place-items-center 
    "
    >
      <form
        className="newsletter_form animate-fade-in-3"
        onSubmit={handleSubmit}
      >
        {/* <EnvelopeIcon
          className="hidden sm:inline w-6 h-6 
        text-[#4B4C52] group-focus-within:text-white
         group-hover:text-white transition-colors duration-300"
        /> */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="email_input py-1 border-2 border-orange-800"
          type="email"
          required
          name="email"
          placeholder="Email address"
        />

        <button
          ref={buttonRef}
          disabled={!input}
          type="submit"
          className={`submit_button border-2 py-1 
          bg-gradient-to-r from-orange-400 to-orange-800
           border-orange-800 disabled:border-2 disabled:py-1
        
            disabled:border-orange-800
            
            disabled:grayscale-[95%] disabled:opacity-50 
            disabled:cursor-not-allowed`}
        >
          <span className="default"> Subscribe</span>

          <div className="plane">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </button>
      </form>

      <div className="relative">
        {(successMessage || errorMessage || invalidResource) && (
          <div>
            <div
              className="h-6 w-6 bg-[#1B2926] 
            flex items-center justify-center 
            rounded-full border border-[#273130] 
            flex-shrink-0"
            >
              <CheckIcon className="h-4 w-4 text-[#81A89A]" />
            </div>

            <div className="text-xs sm:text-sm text-[#8b8b8b]">
              {successMessage ? (
                <p>You have been subscribed successfully</p>
              ) : invalidResource ? (
                <p>
                  Your email looks fake or is invalid. Please try
                  a different email.
                </p>
              ) : (
                <p>You are already subscribed</p>
              )}
            </div>

            <XMarkIcon
              className="h-5 w-5 cursor-pointer 
              flex-shrink-0 text-[#4A4B55]"
              onClick={dismissMessages}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
