import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

function Root() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet*/}
      <div className="min-h-[calc(100vh-305px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Root;
