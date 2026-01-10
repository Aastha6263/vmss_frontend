import { instructors } from '../pages/data/instructorsData';
import { Star, Headset, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Instructors() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Learn from the Best Instructors</h1>
        <p className="text-gray-600 mt-2">
          Our expert instructors bring real-world experience and industry
          insights to help you succeed.
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-10 mt-6">
          <div className="flex items-center gap-2 text-blue-600">
            <Star size={20} /> 100+ Certified & Experienced Instructors
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Headset size={20} /> 24/7 Support
          </div>
        </div>

        {/* Contact Button */}
        <button
          onClick={() => navigate('/contact')}
          className="mt-6 bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700"
        >
          Contact
        </button>
      </div>

      {/* Instructors Grid (5 x 2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {instructors.map((inst) => (
          <div
            key={inst.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <img
              src={inst.img}
              alt={inst.name}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="font-semibold mt-3">{inst.name}</h3>
            <p className="text-blue-600 text-sm">{inst.role}</p>

            <p className="text-gray-500 text-xs mt-2">⭐ {inst.skills}</p>
            <p className="text-gray-400 text-xs mt-1">🕒 {inst.exp}</p>
          </div>
        ))}

        {/* Dummy More Card */}
        <div className="bg-white border-dashed border-2 flex flex-col justify-center items-center rounded-xl p-6">
          <Plus size={40} className="text-blue-500" />
          <p className="text-gray-500 mt-2">More</p>
        </div>
      </div>
    </div>
  );
}
