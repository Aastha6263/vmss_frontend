import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* ========== LOGO ========== */}
        <h1 className="text-2xl font-bold text-indigo-600">
          Shayari<span className="text-gray-800">Hub</span>
        </h1>

        {/* ========== DESKTOP MENU ========== */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/shayari" className="hover:text-indigo-600">Shayari</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>

        {/* ========== MOBILE MENU ICON ========== */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ========== MOBILE MENU ========== */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link onClick={() => setOpen(false)} to="/" className="block">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block">About</Link>
          <Link onClick={() => setOpen(false)} to="/shayari" className="block">Shayari</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  );
}
