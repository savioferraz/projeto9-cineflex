import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Content, Title } from "./Movies";
import Bottom from "./Bottom";
import Booking from "./Booking";
import Seat from "./Seat";

export default function Seats() {
  const [session, setSession] = useState({});
  const [seats, setSeats] = useState([]);
  const { idSessao } = useParams();

  function selectSeat(seatId) {
    const newSeats = seats.map((value) => {
      if (value.id === seatId) {
        if (!value.isAvailable) {
          alert("Esse assento não está disponível");
          return { ...value };
        }
        return {
          ...value,
          selected: !value.selected,
        };
      }
      return { ...value };
    });
    setSeats([...newSeats]);
  }

  useEffect(() => {
    const linkAPI = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`;
    const promise = axios.get(linkAPI);

    promise.then((res) => {
      setSession(res.data);
      setSeats(res.data.seats);
    });
    promise.catch((error) => {
      console.log(error.response);
      alert(`Opa, algo deu errado... ${error.message}`);
    });
  }, [idSessao]);

  return (
    <Content>
      <Title>Selecione os assentos</Title>
      <Room>
        {seats.length === 0 ? (
          <>Carregando...</>
        ) : (
          seats.map((value) => (
            <Seat key={value.id} seat={value} selectSeat={selectSeat} />
          ))
        )}
      </Room>
      <Label>
        <div className="selecionado"></div> <p>Selecionado</p>{" "}
        <div className=""></div> <p>Disponível</p>{" "}
        <div className="indisponivel"></div> <p>Indisponível</p>
      </Label>
      <Booking seats={seats} session={session} />
      {!session.movie ? (
        ""
      ) : (
        <Bottom
          session={session.movie}
          name={session.name}
          weekday={session.day.weekday}
        ></Bottom>
      )}
    </Content>
  );
}

const Room = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  div {
    width: 26px;
    height: 26px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 50%;
    margin: 16px 8px;
  }
  div.selecionado {
    background: #8dd7cf;
    border: 1px solid #1aae9e;
  }
  div.indisponivel {
    background: #fbe192;
    border: 1px solid #f7c52b;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #4e5a65;
  }
`;
