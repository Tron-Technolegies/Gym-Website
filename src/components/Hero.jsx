import React from 'react';
import ColorBends from './ColorBends';

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center pt-32 pb-20 text-center md:pt-40 md:pb-32 px-4 w-full min-h-[90vh] overflow-hidden border-b border-gray-800/30">
    <div className='absolute inset-0 z-0 w-full h-full opacity-40' >  
<ColorBends
  colors={["#0a1932ff", "#0f1625ff", "#020838ff"]}
  rotation={90}
  speed={0.25}
  scale={1}
  frequency={1}
  warpStrength={1}
  mouseInfluence={1}
  noise={0.15}
  parallax={0.5}
  iterations={1}
  intensity={1.5}
  bandWidth={6}
  transparent
  autoRotate={0}
  color="#110918ff"
/></div>   


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-[2.5rem] font-bold tracking-tight md:text-2xl lg:text-[4rem] leading-[1.2] drop-shadow-lg">
          Transform The Way You <br />
          Manage Your <span className="blue-text">Fitness Business</span>
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] sm:text-base text-gray-300 md:text-lg leading-relaxed drop-shadow-md">
          Power Your Fitness Business With Modern Tools That Simplify Management And Elevate Every Member Experience.
        </p>
        
        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800/60 bg-[#050505]/60 backdrop-blur-md py-10 px-4 transition-transform hover:-translate-y-1 hover:border-[#1d70fd]/40 hover:shadow-[0_10px_30px_rgba(29,112,253,0.2)]">
            <span className="text-4xl font-semibold text-[#1d70fd] md:text-5xl drop-shadow-[0_0_10px_rgba(29,112,253,0.5)]">3000+</span>
            <span className="mt-4 text-sm font-medium text-gray-400">Gyms Powered</span>
          </div>
          
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800/60 bg-[#050505]/60 backdrop-blur-md py-10 px-4 transition-transform hover:-translate-y-1 hover:border-[#1d70fd]/40 hover:shadow-[0_10px_30px_rgba(29,112,253,0.2)]">
            <span className="text-4xl font-semibold text-[#1d70fd] md:text-5xl drop-shadow-[0_0_10px_rgba(29,112,253,0.5)]">500k+</span>
            <span className="mt-4 text-sm font-medium text-gray-400">Active Members</span>
          </div>
          
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800/60 bg-[#050505]/60 backdrop-blur-md py-10 px-4 transition-transform hover:-translate-y-1 hover:border-[#1d70fd]/40 hover:shadow-[0_10px_30px_rgba(29,112,253,0.2)]">
            <span className="text-4xl font-semibold text-[#1d70fd] md:text-5xl drop-shadow-[0_0_10px_rgba(29,112,253,0.5)]">4.75</span>
            <span className="mt-4 text-sm font-medium text-gray-400">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
