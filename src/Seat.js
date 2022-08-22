import React, { useState } from "react";
import styled from "styled-components";

export default function Seat({ seat, selectSeat }) {
  return (
    <Wrapped>
      <div
        className={`${seat.isAvailable ? "" : "unavailable"} 
                      ${seat.selected ? "selected" : ""}`}
        onClick={() => selectSeat(seat.id)}
      >
        {seat.name}
      </div>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  div {
    width: 26px;
    height: 26px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 50%;
    margin: 9px 4px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.selected {
    background: #8dd7cf;
    border: 1px solid #1aae9e;
  }
  div.unavailable {
    background: #fbe192;
    border: 1px solid #f7c52b;
  }
`;
