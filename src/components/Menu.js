import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Menu.css';

const menuItems = [
  {
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato-butter sauce',
    price: '$16.99'
  },
  {
    name: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese in spiced curry sauce',
    price: '$14.99'
  },
  {
    name: 'Dal Makhani',
    description: 'Creamy black lentils cooked overnight',
    price: '$12.99'
  },
  {
    name: 'Biryani',
    description: 'Aromatic rice dish with special spices',
    price: '$15.99'
  }
];

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="menu-content"
      >
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="menu-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;