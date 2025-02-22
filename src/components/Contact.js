import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="contact-content"
      >
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="contact-info"
          >
            <h3>Visit Us</h3>
            <p>123 Culinary Street</p>
            <p>Foodie City, FC 12345</p>
            <h3>Hours</h3>
            <p>Monday - Sunday</p>
            <p>11:30 AM - 10:00 PM</p>
            <h3>Contact</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@ruchiindiankitchen.com</p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="contact-form"
          >
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;