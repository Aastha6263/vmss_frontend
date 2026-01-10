import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../context/ScrollContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { servicesRef, contactRef, scrollTo } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Courses', to: '/courses' },
    { label: 'Industries', to: '/industries' },
    { label: 'Services', scroll: 'services' }, // ✅ SCROLL ONLY
    { label: 'Careers', to: '/careers' },
    { label: 'About Us', to: '/about' },
  ];

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
    }`;

  const handleScroll = (ref) => {
    setOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollTo(ref), 120);
    } else {
      scrollTo(ref);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center gap-6">
          {/* LOGO */}
          <Link to="/" className="text-blue-600 font-semibold">
            VMSS TECHNOLOGIES
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 ml-8">
            {navItems.map((item) =>
              item.scroll ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(servicesRef)}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink key={item.to} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto flex items-center gap-4">
            {/* CONTACT */}
            <button
              onClick={() => handleScroll(contactRef)}
              className="hidden md:inline-flex px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm"
            >
              Contact
            </button>

            {/* LOGIN */}
            <Link
              to="/login"
              className="hidden md:inline-flex px-4 py-1.5 bg-blue-600 rounded-md text-sm text-gray-300 hover:text-gray-600"
            >
              Login
            </Link>

            {/* MOBILE MENU BTN */}
            <button onClick={() => setOpen(true)} className="md:hidden p-2">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="absolute top-0 left-0 w-72 h-full bg-white p-6">
            <div className="flex justify-between mb-6">
              <span className="text-blue-600 font-semibold">
                VMSS TECHNOLOGIES
              </span>
              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.scroll ? (
                  <button
                    key={item.label}
                    onClick={() => handleScroll(servicesRef)}
                    className="text-left text-gray-700 font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-gray-700"
                  >
                    {item.label}
                  </NavLink>
                )
              )}

              <button
                onClick={() => handleScroll(contactRef)}
                className="text-left text-blue-600 font-medium"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
