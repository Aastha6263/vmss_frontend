import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "../Layout/MainLayout";

/* Lazy pages */
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center text-lg">
    Loading...
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>

        {/* ===== PAGES WITH HEADER + FOOTER ===== */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ===== AUTH PAGES (NO FOOTER / HEADER) ===== */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </Suspense>
  );
}
