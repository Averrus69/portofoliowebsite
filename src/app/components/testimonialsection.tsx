import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100" id="testimonials">
      <h2 className="text-3xl font-semibold text-center">Testimonials</h2>
      <div className="mt-8 max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="italic">
            Arry was an excellent developer. He delivered high-quality code and
            was always on time.
          </p>
          <p className="mt-2 text-right">- Djoko Susanto, CEO of Alfamart</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
