import React, {useState } from "react";
import api from "../services/api";
import "./Book.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const id = useParams().id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");




 
  const sendRequest = async () => {
    return await api.put(`/products/${id}`, {
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
    <div>
         
    <form class="row g-3" onSubmit={handleSubmit}>
      <h1>Editar Produto</h1>
      <div class="col-md-6">
        <label class="form-label">Novo Nome do Produto</label>
        <input
          type="text"
          class="form-control"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div class="col-md-6">
        <label class="form-label">Novo Preço do Produto</label>
        <input
          type="number"
          class="form-control"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div class="col-md-6">
        <label class="form-label">Novo Número do Produto</label>
        <input
          type="number"
          class="form-control"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Editar Produto
        </button>
      </div>
    </form>
    </div>

  );
}
