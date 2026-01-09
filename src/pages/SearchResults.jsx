import React from 'react'

import { useLocation, useNavigate } from "react-router-dom";

export default function SearchResults() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(search);
  const q = params.get("q") || "";

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Search results for: <span className="text-blue-600">“{q}”</span>
        </h2>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="text-sm px-4 py-2 border rounded hover:bg-gray-50"
        >
          ← Back to Home
        </button>
      </div>

      {/* RESULTS */}
      {q ? (
        <div className="text-gray-600">
          <p>
            You searched for <strong>{q}</strong>.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            (API search integration pending)
          </p>
        </div>
      ) : (
        <p className="text-gray-500">No search query found.</p>
      )}
    </div>
  );
}
