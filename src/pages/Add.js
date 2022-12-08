import React, { useState } from "react";
import api from "../services/api";
import "./Book.css";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");

  const sendRequest = async () => {
    return await api.post("products", {
      name: name,
      price: price,
      number: number,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/"));
  };

  return (
    <form class="row g-3" onSubmit={handleSubmit}>
      <h1>Adicionar Produto</h1>
      <div class="col-md-6">
        <label class="form-label">Nome do Produto</label>
        <input
          type="text"
          class="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="col-md-6">
        <label class="form-label">Preço do Produto</label>
        <input
          type="number"
          class="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div class="col-md-6">
        <label class="form-label">Número do Produto</label>
        <input
          type="number"
          class="form-control"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Adicionar Novo Produto
        </button>
      </div>
    </form>
  );
}
