import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl font-bold md:text-[2.5rem]">Contact Us</h2>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-col md:flex-row overflow-hidden rounded-xl border border-gray-800/60">
        
        {/* Left Pane */}
        <div className="flex w-full md:w-[45%] flex-col bg-[#050f24] p-10 md:p-12 border-b md:border-b-0 md:border-r border-gray-800/60">
          <h3 className="mb-12 text-[1.75rem] font-bold text-white tracking-wide">Get in touch</h3>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-700/50">
                <FiMail className="text-[1.1rem]" />
              </div>
              <span className="text-[13px]">contact@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-700/50">
                <FiPhone className="text-[1.1rem]" />
              </div>
              <span className="text-[13px]">+91 9867005688</span>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-700/50">
                <FiMapPin className="text-[1.1rem]" />
              </div>
              <span className="text-[13px]">Kerala,Kochi,666666</span>
            </div>
          </div>

          <button type="button" className="mt-16 w-fit rounded-full border border-gray-700 bg-transparent px-6 py-2.5 text-[13px] text-gray-300 transition-colors hover:bg-gray-800">
            Book a Demo &rarr;
          </button>
        </div>

        {/* Right Pane */}
        <div className="w-full md:w-[55%] bg-[#0a0a0c] p-10 md:p-12">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-300">Full Name</label>
              <input type="text" className="rounded-md border border-gray-800 bg-transparent px-4 py-3 text-[13px] text-white transition-colors focus:border-[#1d70fd] focus:outline-none" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-300">Email</label>
              <input type="email" className="rounded-md border border-gray-800 bg-transparent px-4 py-3 text-[13px] text-white transition-colors focus:border-[#1d70fd] focus:outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-300">Phone</label>
              <input type="tel" className="rounded-md border border-gray-800 bg-transparent px-4 py-3 text-[13px] text-white transition-colors focus:border-[#1d70fd] focus:outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-300">Message</label>
              <textarea rows="4" className="rounded-md border border-gray-800 bg-transparent px-4 py-3 text-[13px] text-white transition-colors focus:border-[#1d70fd] focus:outline-none resize-none"></textarea>
            </div>

            <button type="button" className="mt-2 self-end rounded-full bg-gradient-to-r from-[#1D70FD] to-[#114397] px-8 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
