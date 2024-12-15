import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
      <div className="mt-8 max-w-3xl mx-auto">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 mb-4 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-4 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
