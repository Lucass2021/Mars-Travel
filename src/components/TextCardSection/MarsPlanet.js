import React from "react";
import "../../App.css";
import { useSpring, animated } from "react-spring";

function MarsPlanet() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { delay: 1000, duration: 15000 },
  });
  return (
    <div className="container-text-card">
      <animated.div className="text-card" style={props}>
        <h2>
          “It might be helpful to realize, that very probably the parents of
          <span> the first native born Martians are alive today.</span>”
        </h2>

        <h3>
          Harrison ‘Jack’ Schmitt,<br></br> Apollo 17 moonwalker.
        </h3>
      </animated.div>
    </div>
  );
}

export default MarsPlanet;
