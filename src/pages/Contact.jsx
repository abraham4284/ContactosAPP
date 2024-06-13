import React, { useState } from "react";
import { UseContactos } from "../context/ContactosContext";
import { AgregarContacto } from "./AgregarContactos";

export const Contact = () => {
  const { state, addFavorito, deleteContacto } = UseContactos();
  const [dataToEdit,setDataToEdit] = useState(null);

  const handleEdit = (contacto)=>{
    setDataToEdit(contacto);
  }

  const clearEdit = ()=>{
    setDataToEdit(null);
  }

  return (
    <div>
      <h2>Contactos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Aciones</th>
          </tr>
        </thead>
        <tbody>
          {state.contactos.length === 0
            ? ""
            : state.contactos.map((datos, index) => (
                <tr key={index}>
                  <th>{datos.nombre}</th>
                  <th>{datos.email}</th>
                  <th>{datos.telefono}</th>
                  <th className="d-flex gap-2">
                      <button className="btn btn-outline-warning" onClick={()=> handleEdit(datos)}>Edit</button>
                      <button className="btn btn-outline-danger" onClick={()=> deleteContacto(datos.id)}>Eliminar</button>
                      <button className="btn btn-outline-success" onClick={()=> addFavorito(datos.id)}>
                        { datos.favorito ? "Quitar favoritos":"Favorito"}
                      </button>
                  </th>
                </tr>
              ))}
        </tbody>
      </table>
      { dataToEdit && <AgregarContacto dataToEdit ={dataToEdit}  clearEdit ={clearEdit}/>}
    </div>
  );
};
