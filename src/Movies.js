import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Movies() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    promise.then((res) => {
      setItens(res.data);
    });
  }, []);

  console.log(itens.posterURL);

  return (
    <Content>
      <Title>Selecione o filme</Title>
      <MoviesList>
        {itens.map((item) => (
          <Cover>
            <img src={item.posterURL} alt=""></img>
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
  position: fixed;
  top: 67px;
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

const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110px;
`;
