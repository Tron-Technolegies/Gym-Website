import React from "react";
import { Play, UsersRound, CalendarDays, ChartNoAxesColumnIncreasing } from "lucide-react";

export default function ProductWalkthrough() {
  return (
    <section
      id="product-walkthrough"
      className="w-full bg-black px-4 py-16 text-white sm:px-6 md:py-15"
    >
      <div className="mx-auto max-w-[1000px]">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wide text-white">
            PRODUCT WALKTHROUGH
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">See GymX in action</h2>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Discover a simpler way to manage your gym.
          </p>
        </div>

        {/* Video Thumbnail */}
        <div className="overflow-hidden rounded-[22px] border border-[#0875df] bg-[#050a10]">
          <div className="group relative mx-auto h-[360px] w-full max-w-[850px] overflow-hidden rounded-xl">
            <img
              src="walkthrough.png"
              alt="GymX product dashboard walkthrough preview"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

            {/* Play Button */}
            <button
              type="button"
              aria-label="Play GymX product walkthrough"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#187cff] text-white shadow-[0_0_30px_rgba(24,124,255,0.35)] transition hover:scale-110 hover:bg-blue-500 sm:h-[104px] sm:w-[104px]"
            >
              <Play size={38} fill="white" strokeWidth={0} className="ml-1" />
            </button>
          </div>

          {/* Video Caption */}
          <div className="flex items-center justify-center border-t border-[#142333] bg-[#050a10] px-4 py-3.5">
            <p className="text-xs font-semibold text-white">Watch the product tour</p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mx-auto mt-8 grid max-w-[900px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
              <UsersRound size={27} strokeWidth={1.5} />
            </div>
            <span className="text-xs text-slate-200">Manage members</span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
              <CalendarDays size={27} strokeWidth={1.5} />
            </div>
            <span className="text-xs text-slate-200">Track payments</span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0b2b4c] text-[#60a5fa]">
              <ChartNoAxesColumnIncreasing size={27} strokeWidth={1.5} />
            </div>
            <span className="text-xs text-slate-200">Grow your gym</span>
          </div>
        </div>
      </div>
    </section>
  );
}
