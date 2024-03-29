'use client';

import React, { useRef } from 'react';
import { useState } from 'react';
import '../styles/page.css';
import '../styles/globals.css';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
// import { useStyleRegistry } from 'styled-jsx';

const NewsletterForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submitButtonText, setSubmitButtonTextOnSubmit] =
    useState(false);

  const [active, setActive] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [invalidResource, setInvalidResource] = useState('');

  const buttonRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = inputValue;
    const button = buttonRef.current;

    setSubmitButtonTextOnSubmit(true);

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
    setSubmitButtonTextOnSubmit(false);

    const data = await res.json();

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

      return;
    }

    if (data?.email_address) {
      setSuccessMessage(
        <div>
          <span className="font-bold">
            {data.email_address}{' '}
          </span>{' '}
          has been successfully subscribed! You will receive a
          welcome email shortly.
        </div>
      );
      setInputValue('');
      setInvalidResource(undefined);
      setErrorMessage(undefined);

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

  const dismissMessages = () => {
    setSuccessMessage(undefined);

    setErrorMessage('');
    setInvalidResource('');
  };

  return (
    <div
      className=" form_container  grid place-items-center
    grid-cols-1
    "
    >
      <form
        className="newsletter_form max-w-14 md:max-w-14 lg:max-w-14 
        w-full animate-fade-in-3"
        onSubmit={handleSubmit}
      >
        {/* <EnvelopeIcon
          className="hidden sm:inline w-6 h-6 
        text-[#4B4C52] group-focus-within:text-white
         group-hover:text-white transition-colors duration-300"
        /> */}
        <input
          value={inputValue}
          onChange={handleChange}
          className="email_input py-1 "
          type="email"
          required
          name="email"
          placeholder="Email address"
        />

        <button
          ref={buttonRef}
          disabled={!inputValue}
          type="submit"
          className={`submit_button py-1 border
          bg-gradient-to-r from-orange-400 to-orange-800
           border-orange-800  disabled:py-1 disabled:border
            disabled:border-orange-800
            
            disabled:grayscale-[95%] disabled:opacity-50 
            disabled:cursor-not-allowed`}
        >
          <span className="default">
            {' '}
            {submitButtonText ? 'Subcribing...' : 'Subscribe'}
          </span>

          {/* <div className="plane">
            <div className="left"></div>
            <div className="right"></div>
          </div> */}
        </button>
      </form>
      <div className="z-20 relative max-w-14 md:max-w-14 lg:max-w-16 w-full mt-2">
        {(successMessage || errorMessage || invalidResource) && (
          <div
            className="flex justify-center space-x-2 bg-[#0A0E12] 
          shadow-outline-grey text-white rounded-[9px] py-3 px-2 animate-fade-bottom absolute"
          >
            <div className="text-lg sm:text-lg text-center text-[#c5c5c5]">
              {successMessage ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="h-4 w-4 bg-[#1B2926] 
            flex items-center justify-center 
            rounded-full border border-[#273130] 
            flex-shrink-0"
                    >
                      <CheckIcon className="h-4 w-4 text-[#81A89A]" />
                    </div>
                    <p>
                      <span>{successMessage}</span>
                    </p>
                    <XMarkIcon
                      className="h-5 w-5 cursor-pointer text-[#ab2b2b]"
                      onClick={dismissMessages}
                    />
                  </div>
                </div>
              ) : invalidResource ? (
                <div className="flex  items-center justify-between">
                  <div className="flex  items-center">
                    <p>
                      {/* Your email looks fake or is invalid. Please
                      try another em ail */}

                      {invalidResource}
                    </p>

                    <XMarkIcon
                      className="h-4 w-4 cursor-pointer text-[#ab2b2b]"
                      onClick={dismissMessages}
                    />
                  </div>
                </div>
              ) : (
                <div className=" flex items-center justify-between space-x-4">
                  <p>{errorMessage}</p>
                  <div>
                    <XMarkIcon
                      className=" h-4 w-4 pr--8 cursor-pointer text-[#ab2b2b]"
                      onClick={dismissMessages}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
