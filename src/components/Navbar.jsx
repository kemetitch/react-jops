import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const LinkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 lg:mt-3"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 lg:mt-3";
  return (
    <nav className="bg-indigo-700 lg:h-full border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">
        <div className="flex h-20 lg:h-full items-center justify-between">
          <div className="flex lg:flex-col flex-1 items-center justify-center md:items-stretch lg:justify-start">
            <NavLink
              className="flex flex-shrink-0 items-center mr-4 lg:mt-5"
              to="/home"
            >
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white xl:text-xl lg:text-l font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="">
              <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:mt-4">
                <NavLink to="/home" className={LinkClass}>
                  Home
                </NavLink>
                <NavLink to="/add-job" className={LinkClass}>
                  Add Job
                </NavLink>
                <NavLink to="/jobs" className={LinkClass}>
                  Jobs
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
