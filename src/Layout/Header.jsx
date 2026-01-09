import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  /* ESC key close */
  useEffect(() => {
    const close = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            to="/"
            className="text-blue-600 font-semibold text-lg tracking-wide"
          >
            VMSS TECHNOLOGIES
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm hover:bg-gray-50"
            >
              <LogIn size={16} />
              Login
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <aside
            ref={menuRef}
            className="w-full max-w-xs bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-blue-600 font-semibold">
                VMSS TECHNOLOGIES
              </span>
              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-4 text-center py-3 rounded-md border"
              >
                Login
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
