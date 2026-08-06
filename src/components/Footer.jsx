import React from 'react';
import { FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa'; // Assuming standard react-icons

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800/60 bg-[#030303] pt-12 pb-6 md:pt-20">
      <div className="mx-auto grid max-w-[1120px] w-full grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 px-4">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-5 md:gap-6 md:pr-8">
          <a
            className="inline-flex items-center gap-1 font-black tracking-[0.08em]"
            href="#home"
            aria-label="Gym X home"
          >
            <span className="text-[1.7rem] leading-none text-[#1d70fd]">
              GYM
            </span>
            <span className="-translate-y-px text-[1.75rem] leading-none text-[#1d70fd]">
              X
            </span>
          </a>
          <p className="text-[13px] leading-relaxed text-gray-400">
            Run Your Entire Gym. Memberships, Payments, Reminders — All In One App.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 transition-colors hover:text-white"><FiLinkedin size={18} /></a>
            <a href="#" className="text-gray-400 transition-colors hover:text-white"><FiInstagram size={18} /></a>
            <a href="#" className="text-gray-400 transition-colors hover:text-white"><FaFacebookF size={18} /></a>
            <a href="#" className="text-gray-400 transition-colors hover:text-white"><FiTwitter size={18} /></a>
            <a href="#" className="text-gray-400 transition-colors hover:text-white"><FiYoutube size={18} /></a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-bold tracking-wide text-white text-[14px]">Company</h4>
          <a href="#" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">About</a>
          <a href="#contact" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">Contact</a>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-bold tracking-wide text-white text-[14px]">Resource</h4>
          <a href="#pricing" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">Pricing</a>
          <a href="#faq" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">FAQ</a>
          <a href="#" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">Help Center</a>
          <a href="#" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">Change Logs</a>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-bold tracking-wide text-white text-[14px]">Legal</h4>
          <a href="#" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">Terms</a>
          <a href="#" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">Privacy</a>
          <a href="#" className="text-[13px] text-gray-400 transition-colors hover:text-[#1d70fd]">Refund & Cancellation</a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1120px] w-full border-t border-gray-800/60 px-4 pt-6">
        <p className="text-[12px] text-gray-500">© GymX 2026. All right reserved</p>
      </div>
    </footer>
  );
}
