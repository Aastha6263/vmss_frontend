import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

<<<<<<< HEAD
import MainLayout from "../Layout/MainLayout";

/* Lazy pages */
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
=======
/* ================= LAZY IMPORTS ================= */
const Home = lazy(() => import("../pages/Home"));
const Courses = lazy(() => import("../pages/Courses"));
const Instructors = lazy(() => import("../pages/Instructors"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/Login"));
const Registration = lazy(() => import("../pages/Registration"));
const SearchResults = lazy(() => import("../pages/SearchResults"));
>>>>>>> ce4833544e90bcc8f779d083fce98969dd92f830

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center text-lg">
    Loading...
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
<<<<<<< HEAD

        {/* ===== PAGES WITH HEADER + FOOTER ===== */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ===== AUTH PAGES (NO FOOTER / HEADER) ===== */}
        <Route path="/login" element={<Login />} />

=======
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/search" element={<SearchResults />} />
>>>>>>> ce4833544e90bcc8f779d083fce98969dd92f830
      </Routes>
    </Suspense>
  );
}
