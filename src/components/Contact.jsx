import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Removed FaMapMarkedAlt since it's commented out

const Contact = () => {
  const form = useRef(); // Reference to the form
  const [status, setStatus] = useState(null); // State for submission status
  const [loading, setLoading] = useState(false); // State for loading indicator

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Start loading

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID from .env
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID from .env
      form.current, // Reference to the form
      import.meta.env.VITE_EMAILJS_USER_ID // User ID (Public Key) from .env
    )
    .then((result) => {
        console.log("Email sent!", result.text);
        setStatus({ success: true, message: 'Message sent successfully!' });
        form.current.reset(); // Reset form fields
        setLoading(false); // End loading
    })
    .catch((error) => {
        console.error("Email error:", error.text);
        setStatus({ success: false, message: 'An error occurred. Please try again.' });
        setLoading(false); // End loading
    });
  };

  // useEffect to handle the timeout for the status message
  useEffect(() => {
    let timer;
    if (status) {
      // Set a timer to clear the status after 5 seconds
      timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
    // Cleanup the timer when the component unmounts or when status changes
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="bg-black text-white py-20" id="contact" >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Contact Information */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Get in Touch
            </h3>
            <p>Contact me to explore how we can collaborate on your next project.</p>
            <div className='mb-4 mt-8 flex items-center'>
              <FaEnvelope className='text-green-400 mr-2' />
              <a href="mailto:aks9171@nyu.edu" className='hover:underline'>
                aks9171@nyu.edu
              </a>
            </div>
            <div className='mb-4 flex items-center'>
              <FaPhone className='text-green-400 mr-2' />
              <span>+971563326173</span>
            </div>
            {/* Uncomment and update the address if needed */}
            {/* <div className='mb-4 flex items-center'>
                <FaMapMarkedAlt className='text-green-400 mr-2' />
                <span>Street, City, Province, Country</span>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
                disabled={loading} // Disable button when loading
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>

            {/* Submission Status Message */}
            {status && (
              <div className={`mt-4 p-4 rounded ${status.success ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {status.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

