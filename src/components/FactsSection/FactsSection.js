import React from "react";
import Accordion from "./Accordion";

function FactsSection() {
  return (
    <div className="container-facts">
      <h2>Lifelong facts</h2>
      <div className="row-facts">
        <Accordion />
      </div>
    </div>
  );
}

export default FactsSection;
