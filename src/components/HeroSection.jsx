import { useState } from "react";
import TrainingFormModal from "./TrainingFormModal";

/**
 * HeroSection
 * - video background (put /public/video/tech.mp4) OR it will show fallback image
 * - center title + tagline
 * - centered search input styled like screenshot
 * - 3 highlighted options (click opens modal)
 */

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const options = [
    "Become an Instructor",
    "Corporate Training",
    "Individual Training",
  ];

  const openForm = (label) => {
    setTitle(label);
    setOpen(true);
  };

  return (
    <section className="relative min-h-[80vh]">
      {/* VIDEO with fallback background color / image */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/tech.mp4" type="video/mp4" />
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          VMSS TECHNOLOGIES
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Empowering professionals with skills for the Future
        </p>

        {/* SEARCH (centered and styled like screenshot) */}
        <div className="mt-8 w-full max-w-xl">
          <div className="relative">
            <svg
              className="absolute left-3 top-3 text-gray-400 w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              aria-label="Search training programs"
              className="w-full px-12 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search training programs..."
            />
          </div>
        </div>

        {/* HORIZONTAL separator like screenshot */}
        <div className="w-full max-w-xl mt-8 border-t border-gray-300" />

        {/* 3 options row */}
        <div className="mt-6 w-full max-w-4xl px-2 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {options.map((opt) => (
              <div key={opt} className="flex-1 text-left">
                <button
                  onClick={() => openForm(opt)}
                  className="text-left w-full"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {opt}
                  </h3>
                </button>
              </div>
            ))}
          </div>

          {/* small CTA image / buttons block (screenshot shows a small image strip) */}
          <div className="mt-6">
            <div className="w-full max-w-2xl h-20 bg-gradient-to-r from-blue-600 to-transparent rounded-md flex items-center px-6">
              <button className="bg-white text-blue-600 px-5 py-2 rounded mr-4">
                Explore Services
              </button>
              <button className="border border-white/70 text-white px-5 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <TrainingFormModal
        open={open}
        title={title}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
