import React from 'react'
import api from "../services/api";
import { NavLink } from 'react-router-dom'
import "./Book.css";



export default function Product(props) {



const {name,price,number,_id} = props.products


const deleteHandler = async () => {
    await api
      .delete(`/products/${_id}`)
      .then((res) => res.data)
      .then(() =>window.location.reload())
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nome</th>
            <th scope="col">preço</th>
            <th scope="col">número de serie</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <th scope="row">{props.indentificação}</th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{number}</td>
                <td className='edit'>
                  <NavLink
                    className="btn btn-warning"
                    to={`/produtos/${_id}`}
                  >
                    Editar
                  </NavLink>
                </td>
                <td className='delete'>
<button className="btn btn-warning" onClick={deleteHandler}>Deletar</button>
                </td>
              </tr>
        </tbody>
      </table>
    </div>
  )
}
