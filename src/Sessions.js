import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Content, Title } from "./Movies";
import Bottom from "./Bottom";

export default function Sessions() {
  const [sessions, setSessions] = useState({});
  const { idFilme } = useParams();

  useEffect(() => {
    const linkAPI = `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`;
    const promise = axios.get(linkAPI);

    promise.then((res) => {
      setSessions(res.data);
    });
  }, [idFilme]);

  console.log(sessions);

  return (
    <Content>
      <Title>Selecione o horário</Title>
      {sessions.days &&
        sessions.days.map((session) => (
          <Day key={session.id}>
            <h1>
              {session.weekday} - {session.date}
            </h1>
            <div>
              {session.showtimes.map((time) => (
                <Link key={time.id} to={`/assentos/${time.id}`}>
                  <button>{time.name}</button>
                </Link>
              ))}
            </div>
          </Day>
        ))}
      <Bottom poster={sessions.posterURL} title={sessions.title}></Bottom>
    </Content>
  );
}

const Day = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #293845;
    margin: 23px;
  }
  button {
    width: 83px;
    height: 43px;
    background: #e8833a;
    border-radius: 3px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    border: none;
    color: #ffffff;
    margin: 5px;
  }
`;
