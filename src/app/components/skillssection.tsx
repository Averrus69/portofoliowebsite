import React from "react";

const SkillsSection = () => {
  return (
    <section className="py-16 bg-white" id="skills">
      <h2 className="text-3xl font-semibold text-center">Skills</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Front-End</h3>
          <ul className="mt-4">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js, Tailwind CSS</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Back-End</h3>
          <ul className="mt-4">
            <li>Node.js, Express</li>
            <li>MongoDB, PostgreSQL</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">DevOps & Tools</h3>
          <ul className="mt-4">
            <li>Docker, AWS</li>
            <li>Git, Jenkins</li>
            <li>CI/CD, Webpack</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
