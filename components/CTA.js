"use client";

import React from "react";

const ExploreBangladesh = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <img
        src="/ecporeBangladesh.jpg"
        alt="Background of a village in Bangladesh"
        className="object-cover w-full h-full absolute inset-0"
      />

      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Discover the Beauty of Bangladesh
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Explore stunning landscapes, rich culture, and vibrant cities. Your
            adventure awaits.
          </p>
          <button className="btn btn-primary btn-wide bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore Bangladesh
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreBangladesh;
