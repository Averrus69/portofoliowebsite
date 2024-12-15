import React from "react";

const AboutMe = () => {
  return (
    <section className="py-16 bg-gray-100 text-center" id="about">
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto">
        I am a passionate full-stack web developer with experience in both
        front-end and back-end technologies. I enjoy building seamless and
        efficient web applications.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Core Skills</h3>
          <ul className="list-disc pl-6 mt-4">
            <li>JavaScript, React, Node.js</li>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>MongoDB, MySQL</li>
            <li>AWS, Docker</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Key Values</h3>
          <ul className="list-disc pl-6 mt-4">
            <li>Timeliness</li>
            <li>Attention to Detail</li>
            <li>Clear Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
