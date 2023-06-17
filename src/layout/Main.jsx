import { Outlet } from "react-router-dom";
import Navbar from "../pages/sharedPages/Navbar/Navbar";
import Footer from "../pages/sharedPages/Footer/Footer";

const Main = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
