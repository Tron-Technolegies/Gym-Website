import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  // Replace this with your GymX WhatsApp number.
  // Include country code, without + or spaces.
  const phoneNumber = "9867005688";

  const message =
    "Hi GymX! I'm interested in your gym management system. Could you please share more details?";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GymX on WhatsApp"
      title="Chat with GymX"
      className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-110  sm:bottom-8 sm:right-8"
      style={{
        animation: "whatsapp-bounce 1.8s ease-in-out infinite",
      }}
    >
      <FaWhatsapp size={32} strokeWidth={2.5} />

      <style>{`
        @keyframes whatsapp-bounce {
          0%, 100% { transform: translateY(0); }
          10%, 30%, 50% { transform: translateY(-5px); }
          20%, 40% { transform: translateY(0); }
          60%, 90% { transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .whatsapp-button-motion {
            animation: none;
          }
        }
      `}</style>
    </a>
  );
}
