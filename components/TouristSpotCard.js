"use client";

import React from "react";

const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    viewBox="0 0 20 20"
    fill={filled ? "currentColor" : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.92-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.84-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.075 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
  </svg>
);

const TouristSpotCard = ({ spot }) => {
  // simplified card: no local modal or favorite state here (keeps markup clean)

  const formattedOriginal = spot.originalPrice?.toLocaleString?.() ?? spot.originalPrice;
  const formattedDiscounted = spot.discountedPrice?.toLocaleString?.() ?? spot.discountedPrice;

  return (
    <div className="bg-[#f3f7ff] p-4 rounded-2xl shadow-lg">
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="relative">
          <img src={spot.image} alt={spot.name} className="w-full h-44 sm:h-48 object-cover rounded-t-xl" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{spot.name}</h3>
          <p className="text-gray-500 mb-4">{spot.description}</p>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-400 line-through text-sm">${formattedOriginal}</div>
              <div className="text-red-500 font-bold text-xl">${formattedDiscounted}</div>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-600">{spot.days} days</div>
              <div className="flex items-center mt-2">
                <div className="flex -space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < Math.round(spot.rating)} />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{spot.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
