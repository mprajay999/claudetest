import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="logo">Ruchi Indian Kitchen</div>
      <div className="nav-links">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#home"
        >Home</motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#menu"
        >Menu</motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#about"
        >About</motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#contact"
        >Contact</motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;