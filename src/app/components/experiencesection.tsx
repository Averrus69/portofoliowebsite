import React from "react";

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-white" id="experience">
      <h2 className="text-3xl font-semibold text-center">Experience</h2>
      <div className="mt-8 max-w-3xl mx-auto">
        <div className="bg-gray-200 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold">
            Full-Stack Developer - Alfamart
          </h3>
          <p className="mt-2">Jan 2022 - 2023</p>
          <p className="mt-4">
            Developed full-stack web applications, from front-end to back-end,
            optimizing performance and enhancing user experience.
          </p>
        </div>
        {/* Add more experience here */}
      </div>
    </section>
  );
};

export default ExperienceSection;
