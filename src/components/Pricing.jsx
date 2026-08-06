import React from 'react';

const plans = [
  { name: 'Normal', price: '₹ 500/20 Days' },
  { name: 'Silver', price: '₹ 1000/Month' },
  { name: 'Gold', price: '₹ 2500/2 Month' },
  { name: 'Premium', price: '₹ 5000/3 Month' },
  { name: 'Platinum', price: '₹ 8000/9 Month' },
  { name: 'Diamond', price: '₹ 12000/365 Days' }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 text-center">
      <div className="mb-16 flex flex-col items-center">
        <span className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">PRICING</span>
        <h2 className="text-3xl font-bold md:text-5xl">
          Simple, transparent <span className="blue-text">pricing</span>
        </h2>
        <p className="mt-6 text-gray-400">No Hidden Fees. Pick A Plan That Fits Your Gym.</p>
      </div>

      <div className="mx-auto grid max-w-6xl w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-0">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className="flex flex-col items-start justify-center rounded-2xl bg-[#061022] p-10 transition-transform duration-300 hover:-translate-y-1 hover:bg-[#08162e]"
          >
            <h3 className="mb-8 text-2xl font-bold text-white tracking-wide">{plan.name}</h3>
            <div className="text-[1.35rem] font-bold text-white">{plan.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
