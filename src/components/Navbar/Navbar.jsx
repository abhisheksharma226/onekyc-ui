import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavLinks = [
  {
    id: 1,
    title: "Subsription",
    link: "#",
  },
  {
    id: 2,
    title: "About us",
    link: "#",
  },
  {
    id: 3,
    title: "Services",
    link: "#",
  },
  {
    id: 4,
    title: "Developers",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
       <Logo />
        {/* Link section */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a
                href={link.link}
                className="inline-block mx-4 text-lg font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button section */}
        <div>
        <Link to="/login">
          <button className="primary-btn">Login</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
