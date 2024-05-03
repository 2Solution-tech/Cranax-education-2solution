"use client"
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [state, handleSubmit] = useForm("xayrvpej");

  const handleInterestSelect = (interest) => {
    setSelectedInterest(selectedInterest === interest ? '' : interest);
  };

  if (state.succeeded) {
    return <p>Thanks for contacting , and we will get back to you as soon as possible.!</p>;
  }

  return (
    <div className="bg-gray-200 p-6 rounded-lg">
      <p className="text-sm font-semibold text-[#333]">I am interested in...</p>
     
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type='text'
          placeholder='Name'
          id="name"
          name="name"
          className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079] text-black"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-red-500"
        />
        <input
          type='email'
          placeholder='Email'
          id="email"
          name="email"
          className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079] text-black"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500"
        />
        <input
          type='text'
          placeholder='Subject'
          id="subject"
          name="subject"
          className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079] text-black"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="text-red-500"
        />
        <textarea
          placeholder='Message'
          rows="6"
          id="message"
          name="message"
          className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079] text-black"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500"
        />
        <button
          type='submit'
          className="text-white bg-[#a91079] hover:bg-[#a91079e2] font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
            <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
          </svg>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
