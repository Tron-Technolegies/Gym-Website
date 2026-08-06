import React, { useState } from 'react';

const faqs = [
  { question: "Is there a free trial?", answer: "Yes, we offer a 14-day free trial so you can explore all features before committing." },
  { question: "Can I cancel my subscription?", answer: "Absolutely. You can cancel your subscription at any time from your account settings." },
  { question: "Do you offer customer support?", answer: "Yes, we provide 24/7 email support and priority phone support for premium plans." },
  { question: "Is my data secure with Gym X?", answer: "We use industry-standard encryption and security protocols to ensure your data is always safe." },
  { question: "Can I manage multiple locations?", answer: "Yes, our Business and Enterprise plans allow you to seamlessly manage multiple gym locations." },
  { question: "Do you offer custom pricing for large enterprises?", answer: "Yes, please contact our sales team to discuss custom pricing tailored to your scale." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.5fr] lg:gap-24">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl leading-[1.2]">
            Frequently Asked <br />
            <span className="blue-text">Questions</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-sm">
            Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border ${openIndex === index ? 'border-gray-700 bg-gray-900/30' : 'border-gray-800/50 bg-transparent'} p-1 transition-colors`}
            >
              <button 
                className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-white transition-colors hover:text-[#1d70fd]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${openIndex === index ? 'border-[#1d70fd] text-[#1d70fd]' : 'border-gray-700 text-gray-400'}`}>
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed pr-12">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
