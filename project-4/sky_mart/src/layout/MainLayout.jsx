import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#0d0d0d] text-white">

      <Navbar />

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;