import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

/* ================= LAZY IMPORTS ================= */
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const Login = lazy(() => import("../pages/Login"));
const Registration = lazy(() => import("../pages/registration"));

/* ================= LOADER ================= */
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <span className="text-gray-500 text-sm">Loading...</span>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Suspense>
  );
}
