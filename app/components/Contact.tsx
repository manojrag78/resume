"use client"
import React, { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Scroll form into view when it becomes visible
  useEffect(() => {
    if (isFormVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isFormVisible]);

  return (
    <section id="contact" className="py-12 text-center bg-gray-50 mt-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Me</h2>
      <p className="text-lg text-gray-600 mb-4">
        I would love to hear from you! Feel free to reach out to me.
      </p>

      {!isFormVisible && (
        <button
          onClick={toggleFormVisibility}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Contact Me
        </button>
      )}

      {isFormVisible && (
        <div ref={formRef} className="mt-8 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form
            action="https://formspree.io/f/mpwqolja"
            className="space-y-6"
            target="_top"
            method="POST"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 text-left mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 text-left mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-sm font-medium text-gray-700 text-left mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 text-left mb-1"
              >
                Inquiry Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Close Button */}
          <button
            onClick={toggleFormVisibility}
            className="mt-4 w-full px-4 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}
