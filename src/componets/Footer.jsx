import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ========== BRAND ========== */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Shayari<span className="text-indigo-500">Hub</span>
          </h2>
          <p className="text-sm mt-3 text-gray-400">
            A beautiful platform to read, write, and share heartfelt shayari.
          </p>
        </div>

        {/* ========== QUICK LINKS ========== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400">About</Link>
            </li>
            <li>
              <Link to="/shayari" className="hover:text-indigo-400">Shayari</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* ========== CATEGORIES ========== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-indigo-400 cursor-pointer">Love Shayari</li>
            <li className="hover:text-indigo-400 cursor-pointer">Sad Shayari</li>
            <li className="hover:text-indigo-400 cursor-pointer">Motivational</li>
            <li className="hover:text-indigo-400 cursor-pointer">Friendship</li>
          </ul>
        </div>

        {/* ========== SOCIAL ========== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <Instagram />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* ========== BOTTOM BAR ========== */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShayariHub. Made with{" "}
        <Heart className="inline text-red-500" size={16} /> by Aastha
      </div>
    </footer>
  );
}
