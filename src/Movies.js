import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setItens] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    promise.then((res) => {
      setItens(res.data);
    });
  }, []);

  return (
    <Content>
      <Title>Selecione o filme</Title>
      <MoviesList>
        {movies.map((movie) => (
          <Cover>
            <Link to={`/sessoes/${movie.id}`}>
              <img src={movie.posterURL} alt=""></img>
            </Link>
          </Cover>
        ))}
      </MoviesList>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 67px;
  margin-bottom: 140px;
  box-sizing: border-box;
  padding: auto 23px;
`;

const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100px;
`;

const MoviesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 480px;
  box-sizing: border-box;
`;

const Cover = styled.div`
  box-sizing: border-box;
  height: 210px;
  width: 145px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: #ffffff;
  margin: 5px 15px;
  padding: 8px;
  cursor: pointer;

  img {
    width: 129px;
    height: 193px;
  }
`;

export { Content, Title };
