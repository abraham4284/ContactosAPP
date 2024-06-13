import React from "react";
import { Link } from "react-router-dom";

export const GestionDeContactos = () => {
  return (
    <div>
      <h1>Gestion de contactos</h1>
      <ul>
        <li><Link to={"/contactos"}>Contactos</Link> </li>
        <li><Link to={"/favoritos"}>Favoritos </Link> </li>
        <li><Link to={"/agregar"}>Agregar </Link> </li>
      </ul>
    </div>
  );
};
