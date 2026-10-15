import React, { useState } from "react";
import { CheckSquare } from "lucide-react";

const plans = [
  {
    name: "Normal",
    price: "₹500",
    duration: "20 days",
    description: "A short-term option to get started.",
  },
  {
    name: "Silver",
    price: "₹1,000",
    duration: "month",
    description: "A simple month-to-month option.",
  },
  {
    name: "Gold",
    price: "₹2,500",
    duration: "2 months",
    description: "Plan ahead for the next two months.",
  },
  {
    name: "Premium",
    price: "₹5,000",
    duration: "3 months",
    description: "Three months of gym management.",
  },
  {
    name: "Platinum",
    price: "₹8,000",
    duration: "9 months",
    description: "Keep your operations organised for nine months.",
  },
  {
    name: "Diamond",
    price: "₹12,000",
    duration: "365 days",
    description: "A full year of gym management.",
  },
];

const features = [
  "Member management",
  "Attendance tracking",
  "Payment reports",
  "AI diet planning",
];

export default function Pricing() {
  const [activePlan, setActivePlan] = useState("Platinum");

  return (
    <section id="pricing" className="bg-black px-4 py-14 text-white sm:px-6 md:py-24">
      {/* Pricing Heading */}
      <div className="mb-14 flex flex-col items-center text-center">
        <span className="mb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white">
          PRICING
        </span>

        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Simple, transparent <span className="blue-text">pricing</span>
        </h2>

        <p className="mt-4 text-sm text-white sm:text-base">
          No Hidden Fees. Pick A Plan That Fits Your Gym.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => {
          const isActive = activePlan === plan.name;

          return (
            <div
              key={plan.name}
              onClick={() => setActivePlan(plan.name)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActivePlan(plan.name);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              className={`flex min-h-[340px] cursor-pointer flex-col rounded-xl border p-6 transition-all duration-200 ${
                isActive
                  ? "border-[#1677ff] bg-black shadow-[0_0_16px_rgba(22,119,255,0.15)]"
                  : "border-[#202020] bg-black hover:border-[#343434]"
              }`}
            >
              {/* Plan Name */}
              <h3
                className={`text-sm font-medium text-white ${
                  isActive ? "text-base font-bold" : ""
                }`}
              >
                {plan.name}
              </h3>

              {/* Price and Duration */}
              <div className="mt-3 flex flex-wrap items-baseline gap-2">
                <span className="text-3xl font-bold leading-tight tracking-tight text-white">
                  {plan.price}
                </span>

                <span className="text-[11px] text-slate-400">/ {plan.duration}</span>
              </div>

              {/* Description */}
              <p className="mt-2 min-h-[32px] text-[11px] leading-5 text-slate-400">
                {plan.description}
              </p>

              {/* Select Plan Button */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActivePlan(plan.name);
                }}
                className={`mt-5 flex h-10 w-full items-center justify-center rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#1677ff] text-white shadow-[0_0_14px_rgba(22,119,255,0.25)] hover:bg-blue-600"
                    : "bg-[#262626] text-white hover:bg-[#353535]"
                }`}
              >
                Select Plan
              </button>

              {/* Divider */}
              <div className="my-5 border-t border-[#202020]" />

              {/* Included Features */}
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-[11px] text-slate-300"
                  >
                    <CheckSquare
                      size={14}
                      strokeWidth={1.6}
                      className={`shrink-0 ${isActive ? "text-[#1677ff]" : "text-[#777777]"}`}
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
