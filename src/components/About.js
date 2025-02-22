import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-content"
      >
        <h2>About Ruchi Indian Kitchen</h2>
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="about-text"
          >
            <p>
              At Ruchi Indian Kitchen, we bring you the authentic flavors of India
              with a modern twist. Our chefs use traditional recipes and fresh,
              high-quality ingredients to create memorable dining experiences.
            </p>
            <p>
              Established with a passion for Indian cuisine, we take pride in
              serving dishes that reflect our cultural heritage while meeting
              contemporary tastes and dietary preferences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="about-features"
          >
            <div className="feature">
              <h3>Traditional Recipes</h3>
              <p>Authentic Indian cooking methods</p>
            </div>
            <div className="feature">
              <h3>Fresh Ingredients</h3>
              <p>Locally sourced when possible</p>
            </div>
            <div className="feature">
              <h3>Dietary Options</h3>
              <p>Vegetarian and vegan choices</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;