import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

export default function Booking({}) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  function Book() {
    const userInfo = { name: name, cpf: cpf };
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      userInfo
    );

    promise.then(Navigate("/"));
  }

  return (
    <Form onSubmit={Book}>
      <h1>Nome do comprador</h1>
      <input
        type="text"
        placeholder="Digite seu nome..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h1>CPF do comprador</h1>
      <input
        type="text"
        placeholder="Digite seu CPF..."
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      ></input>
      <button type="submit">Reservar assento(s)</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-family: Roboto;
  font-weight: 400;
  font-size: 18px;
  width: 80%;

  input {
    width: 320px;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
  }

  button {
    width: 60%;
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
