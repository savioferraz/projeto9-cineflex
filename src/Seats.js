import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Content, Title } from "./Movies";
import Bottom from "./Bottom";
import Booking from "./Booking";

function Seat({ name, isAvaliable }) {
  const [selected, setSelected] = useState(false);
  const [color, setColor] = useState("");

  function selecionar() {
    if (isAvaliable) {
      setSelected(true);
    } else {
      alert("Esse assento não está disponível");
      setColor("indisponivel");
    }
  }

  return (
    <div className={color} onClick={selecionar}>
      {name}
    </div>
  );
}

export default function Seats() {
  const [movie, setMovie] = useState({});
  const { idSessao } = useParams();

  useEffect(() => {
    const linkAPI = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`;
    const promise = axios.get(linkAPI);

    promise.then((res) => {
      setMovie(res.data);
    });
  }, []);

  console.log(movie);

  return (
    <Content>
      <Title>Selecione os assentos</Title>
      <Room>
        {movie.seats &&
          movie.seats.map((seat) => (
            <Seat className="" key={seat.id} name={seat.name} />
          ))}
      </Room>
      <Label>
        <div className="selecionado"></div> <p>Selecionado</p>{" "}
        <div className=""></div> <p>Disponível</p>{" "}
        <div className="indisponivel"></div> <p>Indisponível</p>
      </Label>
      <Booking />
      <Bottom
        poster={movie.movie.posterURL}
        title={movie.movie.title}
        day={movie.day.weekday}
        time={movie.name}
      ></Bottom>
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
    border-radius: 50%;
    margin: 9px 4px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
