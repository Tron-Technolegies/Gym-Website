import React from 'react';

export default function Steps() {
  return (
    <section className="relative py-12 md:py-24 text-center overflow-hidden ">
      {/* Textured noise background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Gradient glow accent */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="mb-20 text-3xl font-bold md:text-5xl text-white">
          Running in <span className="text-[#1d70fd]">2 Steps</span>
        </h2>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-between gap-16 md:flex-row md:gap-8">
          
          {/* Desktop connecting line */}
          <div className="absolute top-12 left-[20%] right-[20%] hidden h-[2px] bg-[#0f2854] md:block" />

          {/* Step 1 */}
          <div className="relative flex flex-col items-center max-w-sm">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#0a1835] z-10 p-2 shadow-2xl border border-[#13326b]/50">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#13326b] shadow-inner">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">Add Your Members</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[280px]">
              Import Your Existing List Or Add Members One By One. Photos, Plans, Payment History — All In One Place.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center max-w-sm">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#0a1835] z-10 p-2 shadow-2xl border border-[#13326b]/50">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#13326b] shadow-inner">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
            </div>
            <h3 className="mb-4 text-xl font-bold text-white">Let It Run Itself</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[300px]">
              Reminders, Reports, Renewals — Fully Automated. You Focus On Training, DGymBook Handles The Rest.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}