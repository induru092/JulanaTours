import React from 'react';
import './Status.css';

export const StatsSection = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Premium Cars' },
    { number: '50+', label: 'Destinations' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;