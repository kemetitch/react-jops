import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-20/80 w-full gap-0 lg:gap-6">
        <main className="order-last min-h-[100vh] ">
          <Outlet />
        </main>
        <aside>
          <Navbar />
        </aside>
      </div>

      <ToastContainer />
    </>
  );
};

export default MainLayout;
