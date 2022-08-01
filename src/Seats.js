import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Content, Title } from "./Movies";
import Bottom from "./Bottom";

export default function Seats() {
  const [seats, setseats] = useState([]);
  const { idSessao } = useParams();

  useEffect(() => {
    const linkAPI = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`;
    const promise = axios.get(linkAPI);

    promise.then((res) => {
      setseats(res.data);
    });
  }, [idSessao]);

  console.log(seats.seats);

  return (
    <Content>
      <Title>Selecione os seatss</Title>
      <Room>
        {seats.seats.map((seat) => (
          <div>{seat.name}</div>
        ))}
      </Room>
    </Content>
  );
}

const Room = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div {
    width: 26px;
    height: 26px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    margin: 9px 3px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 11px;
  }
`;
