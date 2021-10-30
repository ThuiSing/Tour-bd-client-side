import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, userSignOut } = useAuth();
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [sticky, setSticky] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });
  const handleUserBtn = () => {
    openUserInfo ? setOpenUserInfo(false) : setOpenUserInfo(true);
  };

  return (
    <header
      className={`bg-primary relative text-primary py-6 w-full z-50 ${
        sticky && "sticky top-0 shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl uppercase font-bold">TOURBD</h1>
        </div>
        <div className=" w-1/2 flex items-center flex justify-end items-center">
          {user.email ? (
            <div className="flex items-center">
              <NavLink
                exact
                activeClassName="text-btnTwo"
                to="/"
                className="px-4 py-2 font-semibold"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="text-btnTwo"
                to="/services"
                className="px-4 py-2 font-semibold "
              >
                Packages
              </NavLink>
              <NavLink
                activeClassName="text-btnTwo"
                to="/addPackage"
                className="px-4 py-2 font-semibold"
              >
                Add Package
              </NavLink>
              <NavLink
                activeClassName="text-btnTwo"
                to="/myPackages"
                className="px-4 py-2 font-semibold"
              >
                My Packages
              </NavLink>
            </div>
          ) : (
            <div className="flex items-center">
              <NavLink
                exact
                activeClassName="text-btnTwo"
                to="/"
                className="px-4 py-2 font-semibold"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="text-btnTwo"
                to="/services"
                className="px-4 py-2 font-semibold "
              >
                Packages
              </NavLink>
            </div>
          )}

          {/* user infos */}
          <div
            onClick={handleUserBtn}
            className="flex items-center ml-10 cursor-pointer"
          >
            <div
              className={`bg-white rounded-full ${user.email || "p-1"} ml-2`}
            >
              {user.email ? (
                <img
                  className="rounded-full"
                  width="50"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#004643"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </div>
            {openUserInfo && (
              <div className="bg-primary w-1/5 text-center absolute top-full right-0 py-3 shadow-sm z-50">
                {user.email ? (
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">
                      {user.displayName}
                    </h2>
                    <NavLink
                      activeClassName="text-btnTwo"
                      to="/all-booked-packages"
                      className="px-4 py-2 font-semibold hover:text-btnTwo mb-2 block"
                    >
                      Manage All Packages
                    </NavLink>
                    <button
                      onClick={userSignOut}
                      className="bg-btn w-32 py-2 block mx-auto  mb-2 hover:bg-white rounded hover:text-btnTwo transition duration-400"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">
                      <button className="bg-btn w-32 py-2 block mx-auto  mb-2 hover:bg-white hover:text-btnTwo transition duration-400">
                        Login
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
