import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaComment } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import reldynLogo from "../assets/reldyn-logo.svg";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-6 flex justify-between items-center bg-color-white border-b border-line-color px-6 lg:px-20">
      <NavLink to="/">
        {({ isActive }) => (
          <span
            className={
              isActive
                ? "text-primary-color font-bold font-inter"
                : "text-secondary-color font-inter font-light"
            }
          >
            <div className="w-full">
              <Link to="/">
                <img
                  src={reldynLogo}
                  alt="Reldyn Logo"
                  className="w-24 md:w-32"
                />
              </Link>
            </div>
          </span>
        )}
      </NavLink>

      <div className="hidden lg:flex items-center gap-12">
        <NavLink to="/">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary-color font-bold font-inter"
                  : "text-secondary-color font-inter font-light"
              }
            >
              <div className="flex flex-row items-center space-x-2">
                <FaHome />
                <p>Home</p>
              </div>
            </span>
          )}
        </NavLink>
        <NavLink to="/about">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary-color font-bold font-inter"
                  : "text-secondary-color font-inter font-light"
              }
            >
              <div className="flex flex-row items-center space-x-2">
                <p>About Us</p>
              </div>
            </span>
          )}
        </NavLink>
        <NavLink to="/services">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary-color font-bold font-inter"
                  : "text-secondary-color font-inter font-light"
              }
            >
              <div className="flex flex-row items-center space-x-2">
                <p>Services</p>
              </div>
            </span>
          )}
        </NavLink>
        <NavLink to="/products">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary-color font-bold font-inter"
                  : "text-secondary-color font-inter font-light"
              }
            >
              <div className="flex flex-row items-center space-x-2">
                <p>Products</p>
              </div>
            </span>
          )}
        </NavLink>
        <NavLink to="/careers">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary-color font-bold font-inter"
                  : "text-secondary-color font-inter font-light"
              }
            >
              <div className="flex flex-row items-center space-x-2">
                <p>Careers</p>
              </div>
            </span>
          )}
        </NavLink>
        <NavLink to="/contact">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "text-primary-color font-bold font-inter"
                  : "text-primary-color font-bold font-inter"
              }
            >
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-row items-center space-x-2">
                  <FaComment className="text-primary-color" />
                  <p className="">Contact us</p>
                </div>
              </div>
            </span>
          )}
        </NavLink>
      </div>

      <div className="lg:hidden">
        <FaBars onClick={toggleMenu} className="text-primary-color" />
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-4 left-0 w-screen h-screen bg-color-white z-10 flex flex-col items-center justify-center">
          <FaTimes
            onClick={toggleMenu}
            className="text-primary-color absolute top-4 right-4"
          />

          <NavLink to="/">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-primary-color font-bold font-inter"
                    : "text-secondary-color font-inter font-light"
                }
              >
                <div
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="flex flex-row items-center space-x-2"
                >
                  <FaHome />
                  <p>Home</p>
                </div>
              </span>
            )}
          </NavLink>

          <NavLink to="/about">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-primary-color font-bold font-inter"
                    : "text-secondary-color font-inter font-light"
                }
              >
                <div
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="flex flex-row items-center space-x-2"
                >
                  <p>About Us</p>
                </div>
              </span>
            )}
          </NavLink>

          <NavLink to="/services">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-primary-color font-bold font-inter"
                    : "text-secondary-color font-inter font-light"
                }
              >
                <div
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="flex flex-row items-center space-x-2"
                >
                  <p>Services</p>
                </div>
              </span>
            )}
          </NavLink>

          <NavLink to="/products">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-primary-color font-bold font-inter"
                    : "text-secondary-color font-inter font-light"
                }
              >
                <div
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="flex flex-row items-center space-x-2"
                >
                  <p>Products</p>
                </div>
              </span>
            )}
          </NavLink>

          <NavLink to="/careers">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-primary-color font-bold font-inter"
                    : "text-secondary-color font-inter font-light"
                }
              >
                <div
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="flex flex-row items-center space-x-2"
                >
                  <p>Careers</p>
                </div>
              </span>
            )}
          </NavLink>

          <NavLink to="/contact">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "text-primary-color font-bold font-inter"
                    : "text-secondary-color font-inter font-light"
                }
              >
                <div className="flex flex-row items-center space-x-2">
                  <div
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    className="flex flex-row items-center space-x-2 my-4"
                  >
                    <FaComment className="text-primary-color" />
                    <p className="text-primary-color font-inter">
                      Chat with us
                    </p>
                  </div>
                </div>
              </span>
            )}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
