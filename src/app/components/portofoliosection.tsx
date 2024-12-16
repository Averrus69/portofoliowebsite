import React from "react";

const PortfolioSection = () => {
  return (
    <section className="py-16 bg-gray-100" id="portfolio">
      <h2 className="text-3xl font-semibold text-center">Portfolio</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">
            E-commerce Platform for Alfamart
          </h3>
          <img src="img/Alfamart_logo.jpg" alt="Project 1" className="mt-4" />
          <p className="mt-4">
            A scalable e-commerce platform built with React, Node.js, and AWS
            that increased sales by 35%.
          </p>
          <a
            href="https://alfagift.id/"
            className="text-blue-500 mt-4 inline-block"
          >
            View Project
          </a>
        </div>{" "}
        <div className="mt-6 ">
          <h4 className="font-semibold">Project Overview</h4>
          <div className="mt-4">
            <p>
              <strong>Situation:</strong> Alfamart, a growing retail chain,
              needed a streamlined POS system to manage sales, inventory, and
              customer interactions at multiple store locations.
            </p>
            <p>
              <strong>Task:</strong> I was tasked with developing a
              user-friendly, reliable POS system that would integrate seamlessly
              with their existing databases, support real-time updates, and
              provide detailed sales reporting.
            </p>
            <p>
              <strong>Action:</strong> I built the POS system using React for
              the front-end, ensuring a clean, responsive UI that works across
              all devices. On the back-end, I used Node.js and Express to create
              RESTful APIs for handling transactions and inventory updates.
              MongoDB was used for storing inventory and transaction data. I
              also integrated a reporting feature that provides detailed sales
              analytics for store managers.
            </p>
            <p>
              <strong>Result:</strong> The system reduced transaction processing
              time by 20%, minimized human errors, and helped store managers
              track inventory more effectively. The implementation of real-time
              sales reporting led to better decision-making, increasing sales by
              35% within the first quarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
