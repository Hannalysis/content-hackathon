"use client"
import { useState } from 'react';
import styles from "../styles/Setup.module.css"

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <h3
            className={styles.setup}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </h3>
          {activeIndex === index && (
            <div className="accordion-body">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;