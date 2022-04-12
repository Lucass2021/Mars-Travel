import { useState } from "react";
import "../../App.css";
import { Data } from "./Data";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected == index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {Data.map((item, index) => (
          <div className="item" key={index}>
            <div
              className="title"
              onClick={() => {
                toggle(index);
              }}
            >
              <h2>{item.title}</h2>
              <span>{selected == index ? "-" : "+"}</span>
            </div>
            <div className={selected == index ? "contenct show" : "content"}>
              <p> {item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
