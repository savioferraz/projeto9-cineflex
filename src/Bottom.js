import React from "react";
import styled from "styled-components";

export default function Bottom({ poster, title, day, time }) {
  return (
    <BottomBar>
      <img src={poster} alt="" />
      <p>
        {title} {day} {time}
      </p>
    </BottomBar>
  );
}

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 117px;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 48px;
    height: 72px;
    border: solid 8px #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: auto 10px;
  }
  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 26px;
    color: #293845;
  }
`;
