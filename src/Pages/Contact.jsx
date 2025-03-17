import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast"; 
import Magnet from "../animations/Magnet";
import BlurText from "../animations/BlurText";
import { sendEmail } from "../API/emailService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("All fields are required.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setLoading(true);
    toast.loading("Sending message...", { id: "sending" });
  
    try {
      const response = await sendEmail(formData);
      
      if (response.status === "success") {
        toast.success("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
      toast.dismiss("sending");
    }
  };
  

  return (
    <>
      <BlurText
        text="Contact Me"
        delay={50}
        animateBy="words"
        direction="top"
        className="text-6xl font-bold py-6 scroll-mt-32"
        id="Contact"
      />
      <div className="w-16 h-2 rounded-full bg-accent"></div>

      <div className="flex justify-center items-center w-full py-14">
        <form className="flex flex-col justify-center items-center gap-6 w-[720px]" onSubmit={handleSubmit}>
          {/* Name Input */}
          <label className="w-full">
            <div className="flex gap-2 items-center pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

            <span className="text-xl font-tomorrow font-semibold">Name</span>
            </div>
              
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full h-16 bg-transparent border border-black rounded-xl px-4 text-lg font-tomorrow focus:outline-none focus:border-[#339933] focus:ring-[#339933] focus:ring-2"
            />
          </label>

          {/* Email Input */}
          <label className="w-full">
            <div className="flex gap-2 items-center pb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>

              <span className="text-lg font-tomorrow font-semibold">Email</span>
            </div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full h-16 bg-transparent border border-black rounded-xl px-4 text-lg font-tomorrow focus:outline-none focus:border-[#339933] focus:ring-[#339933] focus:ring-2"
            />
          </label>

          {/* Message Input */}
          <label className="w-full">
            <div className="flex gap-2 items-center pb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>


              <span className="text-lg font-tomorrow font-semibold">Message</span>
            </div>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your Message here"
              className="w-full h-36 bg-transparent border border-black rounded-xl px-4 text-lg font-tomorrow focus:outline-none focus:border-[#339933] focus:ring-[#339933] focus:ring-2 "
            />
          </label>

          {/* Submit Button */}
          <Magnet padding={10} disabled={loading} magnetStrength={10}>
            <button
              type="submit"
              className={`w-full h-16 rounded-xl flex justify-center items-center transition duration-300
                ${loading ? "bg-gray-400 opacity-50 cursor-not-allowed" : "bg-[#61DAFB] hover:scale-105"}`}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-infinity loading-2xl"></span>
              ) : (
                <span className="text-lg font-tomorrow font-semibold">Send Message</span>
              )}
            </button>
          </Magnet>


        </form>
      </div>
    </>
  );
}

export default Contact;
