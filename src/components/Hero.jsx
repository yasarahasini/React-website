import React, { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
 
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800",
];

function AutoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-6">
      {images.map((img, index) => {
        const isActive = index === currentIndex;
        const isPrev = index === (currentIndex - 1 + images.length) % images.length;
        const isNext = index === (currentIndex + 1) % images.length;

        if (!(isActive || isPrev || isNext)) return null;

        return (
          <img
            key={img}
            src={img}
            alt={`slide-${index}`}
            className={`rounded-xl shadow-lg object-cover w-48 h-80 sm:w-64 sm:h-96 transition-transform duration-500 ease-in-out cursor-pointer ${
              isActive ? 'scale-105 opacity-100' : 'opacity-60'
            }`}
            style={{ flexShrink: 0 }}
            loading="lazy"
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-50 to-white">
      <div className="container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Text section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-900">
            Find your next favorite book
          </h1>
          <p className="mt-4 text-sky-700 max-w-md mx-auto lg:mx-0">
            Explore the best sellers, new releases, and timeless classics.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="px-7 py-3 bg-sky-600 text-white rounded-md shadow-md hover:bg-red-500 transition-colors duration-300"
            >
              Browse Books
            </a>
            <a
              href="#"
              className="px-7 py-3 border-2 border-sky-600 text-sky-600 rounded-md hover:bg-red-500 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image section */}
        <div className="lg:w-1/2 flex justify-center">
          <AutoCarousel />
        </div>
      </div>
    </section>
  );
}
