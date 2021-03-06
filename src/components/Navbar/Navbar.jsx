import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { logout } from "../../Firebase/login";
import { AuthContext } from "../../PrivateRoute/AuthProviderFirebase";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div>
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center text-white ">
                <div>
                  <img
                    className="h-8 w-8 mr-4"
                    src="https://res.cloudinary.com/abidazad/image/upload/v1634538240/healthcare_zlmjqo.png"
                    alt="Workflow"
                  />
                </div>
                <div>
                  <h2>Azad Healthcare</h2>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex  items-baseline space-x-4">
                  <Link
                    to="/home"
                    className=" hover:bg-secondary text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/aboutUs"
                    className="text-white hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/ourService"
                    className="text-white hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Our Service
                  </Link>

                  <Link
                    to="/doctor"
                    className="text-white hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Find a Doctor
                  </Link>

                  <Link
                    to="/news"
                    className="text-white hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    News
                  </Link>
                  <Link
                    to="/contact"
                    className="text-white hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact Us
                  </Link>
                  {/* ----------------------------- */}
                  {currentUser ? (
                    <button className="text-white hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      {currentUser.displayName ||
                        currentUser.email.toString().split("@")[0]}
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="text-white hover:bg-secondary   hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                  )}
                  {currentUser && (
                    <button
                      className="text-white hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  )}
                  {/* -------------------- ---------*/}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/home"
                  className="hover:bg-secondary text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/aboutUs"
                  className="text-white hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </Link>

                <Link
                  to="/ourService"
                  className="text-white hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Our Service
                </Link>

                <Link
                  to="/doctor"
                  className="text-white hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Find a Doctor
                </Link>
                <Link
                  to="/News"
                  className="text-white hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  News
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
