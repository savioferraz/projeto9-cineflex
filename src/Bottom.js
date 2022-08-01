import React from "react";
import styled from "styled-components";

export default function Bottom() {
  return <BottomBar></BottomBar>;
}

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 117px;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  display: flex;
  img {
    width: 48px;
    height: 72px;
  }
`;
