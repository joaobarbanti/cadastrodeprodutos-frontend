import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./Book.css";

import { NavLink } from "react-router-dom";
import Product from "./Product";

const fetchHandler = async () => {
  return await api
    .get("products")
    .then((res) => res.data);
};

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.products));
  }, []);

  console.log(products);



  return (
    <div className="card">
      <h1>Todos Produtos</h1>
     <NavLink className="addnewproduct" to="/add"> <h3 className="add">Adicionar Produto</h3> </NavLink>
      {products &&
        products.map((product, i) => (
        <Product products={product} indentificação={i} />
        ))}
  </div>
  );
}
