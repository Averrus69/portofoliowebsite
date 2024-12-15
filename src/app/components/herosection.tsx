import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-blue-500 text-white">
      <div className="text-center">
        <img
          className="flex mx-auto rounded-full w-40 h-40 object-cover"
          src="img/avatar_stylish.avif"
        ></img>
        <h1 className="text-4xl font-bold">Arry Averrus Adhiputra</h1>
        <p className="text-xl">Full-Stack Web Developer</p>
        <p className="mt-4 text-lg">
          Building scalable and high-performance web solutions for your business
          needs.
        </p>
        <a
          href="#portfolio"
          className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-lg"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
