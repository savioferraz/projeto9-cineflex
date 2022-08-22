import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Booking({ seats, session }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function handleForm(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  }

  function sendForm() {
    console.log(form);
    const seatsId = seats
      .filter((value) => value.selected)
      .map((value) => value.id);
    const body = {
      ids: seatsId,
      ...form,
    };
    console.log(body);
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      body
    );

    promise.then((res) => {
      console.log(res.data);
      navigate("/sucesso", {
        state: {
          session,
          form,
          seats,
        },
      });
    });
    promise.catch((error) => {
      console.log(error.response);
      alert(`Opa, algo deu errado... ${error.message}`);
    });
  }

  return (
    <Form onSubmit={sendForm}>
      <p>Nome do comprador</p>
      <input
        type="text"
        placeholder="Digite seu nome..."
        name="name"
        onChange={(e) => handleForm(e.target.name, e.target.value)}
      ></input>
      <p>CPF do comprador</p>
      <input
        type="number"
        placeholder="Digite seu CPF..."
        name="cpf"
        onChange={(e) => handleForm(e.target.name, e.target.value)}
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
  p {
    font-size: 24px;
  }
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
