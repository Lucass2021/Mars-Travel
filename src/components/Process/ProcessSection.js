import React from "react";
import "../../App.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProcessSection() {
  const percentage = [25, 50, 75, 100];
  return (
    <div className="container-process" id="process">
      <div className="row-process">
        <div className="mars-process">
          <h2>Process of becoming a Marsian</h2>;
          <p>
            The process to become a Marsian could be exhausting. But it is so
            exciting that it would certainly make you stay there if you could.
          </p>
        </div>

        <div className="mars-process-bars" style={{ width: 1000, height: 500 }}>
          <div className="process-inner">
            <CircularProgressbar
              className="bar"
              value={percentage[0]}
              text={`${percentage[0]}%`}
            />
            <h3>Preparation</h3>
          </div>
          <div className="process-inner">
            <CircularProgressbar
              className="bar"
              value={percentage[1]}
              text={`${percentage[1]}%`}
            />
            <h3>Boarding</h3>
          </div>

          <div className="process-inner">
            <CircularProgressbar
              className="bar"
              value={percentage[2]}
              text={`${percentage[2]}%`}
            />
            <h3>Traveling</h3>
          </div>

          <div className="process-inner">
            <CircularProgressbar
              className="bar"
              value={percentage[3]}
              text={`${percentage[3]}%`}
            />
            <h3>Landing</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
