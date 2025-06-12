import React from 'react'
import { useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhoneAlt, faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Contact1 from './Contactimage1.png'

function Contact() {
  const form = useRef();
  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          username.current.value = "";
          phone.current.value = "";
          email.current.value = "";
          message.current.value = "";
          toast.success("🚀 Message Sent!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("😔 Failed!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
    };
  return (
    <div>
          <div className="h-auto w-full  p-4 md:px-8" style={{ background: 'linear-gradient(to right, #aeebee, #6969ec)' }}>
            <div className="experience py-16 bg-[#e6f7f7]">
            <section className="bg-gray-100 py-10" id="contact">
      <h2 className="text-4xl font-bold text-center mb-10">
        <FontAwesomeIcon icon={faUser} /> Get in <span className="text-blue-600">Touch</span>
      </h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img
              className="max-w-full h-auto object-cover w-full"
              draggable="false"
              src={Contact1}
              alt="Contact"
            />
          </div>
          <form
            className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8"
            id="contact-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  ref={username}
                  name="user_name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FontAwesomeIcon icon={faUser} className="absolute right-4 top-3 text-gray-500" />
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  ref={email}
                  name="user_email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FontAwesomeIcon icon={faEnvelope} className="absolute right-4 top-3 text-gray-500" />
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  ref={phone}
                  name="user_phone"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FontAwesomeIcon icon={faPhoneAlt} className="absolute right-4 top-3 text-gray-500" />
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <textarea
                  placeholder="Message"
                  ref={message}
                  name="message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                ></textarea>
                <FontAwesomeIcon icon={faCommentDots} className="absolute right-4 top-3 text-gray-500" />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                value="send"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Submit <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </section>
            </div>
          </div>
    </div>
  )
}

export default Contact
