import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Content, Title } from "./Movies";
import Bottom from "./Bottom";

export default function Sessions() {
  const [sessions, setSessions] = useState([]);
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
      {sessions.days.map((session) => (
        <Day>
          <h1>
            {session.weekday} - {session.date}
          </h1>
          {/* <div>
            {session.showtimes.map((time) => (
              <Link to={`/assentos/${time.id}`}>
                <button>{time.name}</button>
              </Link>
            ))}
          </div> */}
        </Day>
      ))}
      <BottomBar></BottomBar>
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

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 117px;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 48px;
    height: 72px;
  }
`;
