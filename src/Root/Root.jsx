import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

function Root() {
  return (
    <div>
      {/* Navbar */}
      <div className="h-16">
        <Navbar />
      </div>
      {/* Outlet*/}
      <div className="min-h-[calc(100vh-255px)] max-w-7xl mx-auto">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Root;
