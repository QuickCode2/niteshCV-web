import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "29066c0a-5435-4c95-9a88-6fe815b8a188");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportLeave={{ once: true }}
      className="flex justify-center items-center py-40 px-4 bg-[#e6dace]" id="Contact">
      <div className="w-full max-w-3xl text-center">
      
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Contact{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Testimonials
          </span>
        </h1>
        <p className="text-gray-600 mb-12 max-w-md mx-auto">
          Are you ready? Submit the form to talk to me.
        </p>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="w-full bg-white rounded-2xl shadow-2xl p-8 text-gray-600">
          <div className="flex flex-wrap -mx-2">
            {/* First Name */}
            <div className="w-full md:w-1/2 px-2 mb-6 text-left">
              First Name
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="first_name"
                placeholder="Your First Name"
                required/>
            </div>

            {/* Last Name */}
            <div className="w-full md:w-1/2 px-2 mb-6 text-left">
              Last Name
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="last_name"
                placeholder="Your Last Name"
                required/>
            </div>

            {/* Contact */}
            <div className="w-full md:w-1/2 px-2 mb-6 text-left">
              Your Contact
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="number"
                name="contact"
                placeholder="Your Contact"
                required/>
            </div>

            {/* Email */}
            <div className="w-full md:w-1/2 px-2 mb-6 text-left">
              Your Email
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="email"
                name="email"
                placeholder="Your Email"
                required/>
            </div>
          </div>

          {/* Message */}
          <div className="mb-6 text-left">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              name="message"
              placeholder="Message"
              required>
            </textarea>
          </div>

          {/* Button */}
          <button className="bg-blue-600 text-white py-2 px-12 rounded">
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
