import React, { useState } from "react";

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Gym Management System",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("GymX Demo Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Interested In: ${formData.interest}`,
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center pt-28 pb-20 md:pt-36 md:pb-28 text-center px-4 w-full overflow-hidden border-b border-gray-800/30"
    >
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Heading */}
        <h1 className="text-[2.2rem] font-bold tracking-tight md:text-[3rem] lg:text-[3.5rem] leading-[1.15] drop-shadow-lg">
          Transform The Way You
          <br />
          Manage Your <span className="blue-text">Fitness Business</span>
        </h1>

        {/* Book a Demo Button */}
        <button
          type="button"
          onClick={() => setIsBookingOpen(true)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r cursor-pointer  from-[#1d70fd] to-[#103574] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(29,112,253,0.35)]"
        >
          Book a Demo
          <span aria-hidden="true">→</span>
        </button>

        {/* Dashboard Image */}
        <div className="relative mt-10 md:mt-12 w-full max-w-[1050px]">
          <img
            src="/homepic.png"
            alt="GymX gym management dashboard preview"
            className="block h-auto w-full object-contain"
          />
        </div>

        {/* Statistics */}
        <div className="mt-12 md:mt-40 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3">
          {/* Gyms Powered */}
          <div className="flex flex-col items-center justify-center py-6 sm:py-5">
            <span className="text-3xl md:text-4xl font-semibold text-[#1d70fd]">3000+</span>
            <span className="mt-2 text-sm md:text-base font-medium text-white">Gyms Powered</span>
          </div>

          {/* Active Members */}
          <div className="flex flex-col items-center justify-center py-6 sm:py-5 sm:border-l sm:border-gray-800/70">
            <span className="text-3xl md:text-4xl font-semibold text-[#1d70fd]">500k+</span>
            <span className="mt-2 text-sm md:text-base font-medium text-white">Active Members</span>
          </div>

          {/* Average Rating */}
          <div className="flex flex-col items-center justify-center py-6 sm:py-5 sm:border-l sm:border-gray-800/70">
            <span className="text-3xl md:text-4xl font-semibold text-[#1d70fd]">4.75</span>
            <span className="mt-2 text-sm md:text-base font-medium text-white">Average Rating</span>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-md"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="relative my-auto w-full max-w-[550px] max-h-[450px] rounded-2xl border border-[#1d70fd]/40 bg-[#030303] p-6 text-left shadow-[0_0_60px_rgba(29,112,253,0.12)] sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              aria-label="Close booking form"
              className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full text-3xl leading-none text-gray-400 transition hover:text-white"
            >
              ×
            </button>

            {/* Modal Heading */}
            <h2
              id="booking-title"
              className="pr-12 text-2xl font-bold tracking-tight text-white sm:text-[20px]"
            >
              Book a Free <span className="text-[#1d70fd]">GymX Demo</span>
            </h2>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="demo-name"
                  className="mb-2 block text-xs font-semibold text-gray-300"
                >
                  Full Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-sm rounded-xl border border-gray-800 bg-[#0b101a] px-4 py-2 text-white outline-none transition placeholder:text-gray-500 focus:border-[#1d70fd]"
                />
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="demo-phone"
                    className="mb-2 block text-xs font-semibold text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    id="demo-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full text-sm rounded-xl border border-gray-800 bg-[#0b101a] px-4 py-2 text-white outline-none transition placeholder:text-gray-500 focus:border-[#1d70fd]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="demo-email"
                    className="mb-2 block text-xs font-semibold text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full text-sm rounded-xl border border-gray-800 bg-[#0b101a] px-4 py-2 text-white outline-none transition placeholder:text-gray-500 focus:border-[#1d70fd]"
                  />
                </div>
              </div>

              {/* Interested In */}
              <div>
                <label
                  htmlFor="demo-interest"
                  className="mb-2 block text-xs font-semibold text-gray-300"
                >
                  Interested In
                </label>
                <select
                  id="demo-interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full text-sm rounded-xl border border-gray-800 bg-[#0b101a] mb-4 px-4 py-2 text-white outline-none transition focus:border-[#1d70fd]"
                >
                  <option value="Gym Management System">Gym Management System</option>
                  <option value="Membership Management">Membership Management</option>
                  <option value="Payments and Billing">Payments and Billing</option>
                  <option value="Attendance and Reports">Attendance and Reports</option>
                  <option value="All GymX Features">All GymX Features</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#1d70fd] to-[#103574] px-5 py-2 font-bold text-white transition hover:brightness-110 hover:shadow-[0_0_25px_rgba(29,112,253,0.25)]"
              >
                Send
                <span aria-hidden="true">→</span>
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
              Share your details and we'll follow up about your demo request.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
