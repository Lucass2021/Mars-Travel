import React from "react";
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { Button } from "../Button";
import "../../App.css";

function CardTicket() {
  return (
    <div className="container-ticket" id="buyTickets">
      <h2>Available tickets</h2>

      <div className="cards">
        <div className="cardTicket standard-card">
          <div className="cardTitle">
            <h3>Standard ticket</h3>
            <h2>$ 1.000.000</h2>
          </div>
          <div className="cardDescription">
            <ul>
              <li>
                <ImCheckmark className="check" />
                1-month intensive personal training
              </li>
              <li>
                <ImCheckmark className="check" />
                confortable luxurious seats
              </li>
              <li>
                <ImCheckmark className="check" />
                open space included
              </li>
              <li>
                <ImCross className="cross" />
                50+ photos and videos recording
              </li>
              <li>
                <ImCross className="cross" /> unlimited food options
              </li>
            </ul>
          </div>

          <Button>Reserve a seat</Button>

          <div className="ship-standard"></div>
        </div>

        <div className="cardTicket vip-card">
          <div className="cardTitle">
            <h3>VIP ticket</h3>
            <h2>$ 5.000.000</h2>
          </div>
          <div className="cardDescription">
            <ul>
              <li>
                <ImCheckmark className="check" />
                1-month intensive personal training
              </li>
              <li>
                <ImCheckmark className="check" />
                confortable luxurious seats
              </li>
              <li>
                <ImCheckmark className="check" />
                open space included
              </li>
              <li>
                <ImCheckmark className="check" />
                50+ photos and videos recording
              </li>
              <li>
                <ImCross className="cross" /> unlimited food options
              </li>
            </ul>
          </div>

          <Button>Reserve a seat</Button>
        </div>
        <div className="cardTicket exclusive-card">
          <div className="cardTitle">
            <h3>Exclusive ticket</h3>
            <h2>$ 10.000.000</h2>
          </div>
          <div className="cardDescription">
            <ul>
              <li>
                <ImCheckmark className="check" />
                1-month intensive personal training
              </li>
              <li>
                <ImCheckmark className="check" />
                confortable luxurious seats
              </li>
              <li>
                <ImCheckmark className="check" />
                open space included
              </li>
              <li>
                <ImCheckmark className="check" />
                50+ photos and videos recording
              </li>
              <li>
                <ImCheckmark className="check" />
                unlimited food options
              </li>
            </ul>
          </div>

          <Button>Reserve a seat</Button>
        </div>
      </div>
    </div>
  );
}

export default CardTicket;
