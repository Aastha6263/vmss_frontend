import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TalkWithUsButton from "./TalkWithUsButton.jsx";

export default function MainLayout() {
  return (
    <>
      <Header />
       <main className="min-h-screen"></main>
      <Outlet />
      <Footer />
      <TalkWithUsButton />
    </>
  );
}
