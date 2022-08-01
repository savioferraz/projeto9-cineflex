import React from "react";
import styled from "styled-components";

export default function Header() {
  return <Top>CINEFLEX</Top>;
}

const Top = styled.header`
  width: 100%;
  height: 67px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: Roboto;
  font-weight: 400;
  font-size: 34px;
`;
