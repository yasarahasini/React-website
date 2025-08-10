import React from 'react';

const features = [
  {
    title: 'Wide Selection',
    description: 'Thousands of titles across all genres to satisfy every reader.',
  },
  {
    title: 'Fast Delivery',
    description: 'Receive your books quickly with our reliable shipping.',
  },
  {
    title: 'Easy Returns',
    description: 'Hassle-free returns within 30 days of purchase.',
  },
  {
    title: 'Gift Cards',
    description: 'Perfect gifts for book lovers on any occasion.',
  },
];

export default function Features() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold text-sky-900 mb-10 text-center">
        Why Shop With Us
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-sky-700 mb-3">{title}</h3>
            <p className="text-sky-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
