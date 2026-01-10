import React from 'react';

export default function StaticBar() {
  return (
    <div
      className="w-full bg-black text-white text-xs sm:text-sm"
      role="banner"
      aria-label="Promotional message"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center">
        <span
          className="
            tracking-wide 
            select-none
            animate-pulse
            motion-reduce:animate-none
          "
          title="Motivational tagline"
        >
          🚀 Code. Compile. Succeed.
        </span>
      </div>
    </div>
  );
}
