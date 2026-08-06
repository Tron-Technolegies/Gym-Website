import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviewsRow1 = [
  {
    text: "This has been a life changer for me! It's completely eliminated the headaches I used to have with membership management and fee collection.",
    author: "Eleena Mathew"
  },
  {
    text: "I've been using GymX for six months now, and I have nothing negative to say about it. It's incredibly easy to handle, and adding data is straightforward and useful. Compared to other apps, it's lightning-fast and can handle huge amounts of data without any loading issues.",
    author: "Marcus Vance"
  },
  {
    text: "Managing operations has never been this simple and efficient. Highly recommend it to any fitness professional.",
    author: "Sophia Chen"
  },
  {
    text: "The payment tracking and automated reminders saved us dozens of hours every single month.",
    author: "David Miller"
  },
  {
    text: "Switching to GymX was the best decision we made this year. Everything just works.",
    author: "Priya Nair"
  }
];

const reviewsRow2 = [
  {
    text: "I'm incredibly pleased with GymX—it's an exceptionally user-friendly app that upgraded our entire gym workflow.",
    author: "Eleena Mathew"
  },
  {
    text: "Adding member data is straightforward and useful. Best software investment we made this year.",
    author: "Rachel Green"
  },
  {
    text: "Customer support is top-notch and system performance is super smooth even during peak morning hours.",
    author: "Alex Rivera"
  },
  {
    text: "From attendance tracking to financial reports, everything works seamlessly under one dark sleek dashboard.",
    author: "Jordan Lee"
  },
  {
    text: "Our front desk staff picked it up in a day. Intuitive doesn't even begin to describe it.",
    author: "Noah Bennett"
  }
];

/**
 * A single "coverflow" style carousel row.
 * The center card scales up + brightens, side cards shrink + dim.
 * Auto-advances on an interval, pauses on hover, loops infinitely.
 */
function CarouselRow({ reviews, autoPlayMs = 3200, reverse = false }) {
  const trackCount = reviews.length;
  // Triple the list so we can scroll seamlessly in either direction
  const looped = [...reviews, ...reviews, ...reviews];
  const [index, setIndex] = useState(trackCount); // start in the middle copy
  const [animate, setAnimate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const [cardWidth, setCardWidth] = useState(0);
  const [gap] = useState(32);
  const [containerWidth, setContainerWidth] = useState(0);

  const measure = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    if (cardRefs.current[0]) {
      setCardWidth(cardRefs.current[0].offsetWidth);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Auto-advance
  useEffect(() => {
    if (isPaused || cardWidth === 0) return;
    const id = setInterval(() => {
      setAnimate(true);
      setIndex((prev) => (reverse ? prev - 1 : prev + 1));
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [isPaused, autoPlayMs, reverse, cardWidth]);

  // Seamless loop reset: once we drift a full set away from the middle copy,
  // snap back (without animating) to the equivalent position in the middle copy.
  useEffect(() => {
    if (index >= trackCount * 2) {
      const timeout = setTimeout(() => {
        setAnimate(false);
        setIndex(index - trackCount);
      }, 700);
      return () => clearTimeout(timeout);
    }
    if (index < trackCount) {
      const timeout = setTimeout(() => {
        setAnimate(false);
        setIndex(index + trackCount);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [index, trackCount]);

  // Re-enable animation on the next tick after a silent reset
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const step = cardWidth + gap;
  const centerOffset = containerWidth / 2 - cardWidth / 2;
  const translateX = centerOffset - index * step;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
           <div
        className="flex"
        style={{
          gap: `${gap}px`,
          transform: `translateX(${translateX}px)`,
          transition: animate ? 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
        }}
      >
        {looped.map((review, i) => {
          const distance = i - index;
          const isCenter = distance === 0;
          const nearby = Math.abs(distance) === 1;

          const scale = isCenter ? 1.08 : nearby ? 0.92 : 0.82;
          const opacity = isCenter ? 1 : nearby ? 0.55 : 0.25;

          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`w-[300px] md:w-[480px] min-h-[190px] md:min-h-[230px] shrink-0 bg-[#061022] p-4 md:p-6 border flex flex-col justify-between ${
                isCenter
                  ? 'border-[#1d70fd] bg-[#091833]'
                  : 'border-[#0f2854]'
              }`}
              style={{
                transform: `scale(${scale})`,
                opacity,
                transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease, background-color 700ms ease, border-color 700ms ease'
              }}
            >
              <div>
                <div className="mb-1 flex justify-end">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, s) => (
                      <FaStar key={s} size={12} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <FaQuoteLeft className="text-2xl md:text-3xl text-[#1d70fd] mb-1" />
                </div>
                <p className="text-xs md:text-sm text-gray-300 italic leading-relaxed text-center">
                  "{review.text}"
                </p>
              </div>
              <div className="flex justify-end items-center gap-3 mt-3">
                <span className="h-[1px] w-6 bg-gray-600"></span>
                <span className="text-xs font-medium text-gray-300 italic">{review.author}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 overflow-hidden text-white relative">
      <div className="mb-12 text-center px-4">
        <h2 className="text-3xl font-bold md:text-5xl tracking-wide">Testimonials</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Real Feedback From Fitness Professionals Who Trust GymX To Power Their Daily Operations.
        </p>
      </div>

      <CarouselRow reviews={reviewsRow1} autoPlayMs={3200} reverse={false} />
      <CarouselRow reviews={reviewsRow2} autoPlayMs={3600} reverse={true} />
    </section>
  );
}