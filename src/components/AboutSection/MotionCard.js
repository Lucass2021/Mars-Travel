import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../App.css";

function MotionCard() {
  const [ísOpen, setIsOpen] = useState(false);

  return (
    <div className="MotionCard">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!ísOpen)}
        className="card"
      >
        <motion.h2 layout="position">
          Tap here to Learn <br></br>more about Mars
        </motion.h2>
        {ísOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expand"
          >
            <p>
              Mars was named by the ancient Romans for their god of war because
              reddish color was reminiscent of blood. Other civilization also
              named the planet for this attribute - for example the Egyptians
              called it "Her Desher," meaning "The red one".
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default MotionCard;
