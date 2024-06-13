import React, { useState } from "react";
import { UseContactos } from "../context/ContactosContext";
import { AgregarContacto } from "./AgregarContactos";

export const Contact = () => {
  const { state, addFavorito, deleteContacto } = UseContactos();
  const [dataToEdit,setDataToEdit] = useState(null);
  const [search,setSearch] = useState("");




  const handleEdit = (contacto)=>{
    setDataToEdit(contacto);
  }

  const clearEdit = ()=>{
    setDataToEdit(null);
  }
 
  const onChangeSearch = (e)=>{
    setSearch(e.target.value);
  }
 

  const filtrarContactos = state.contactos.filter(contactos=>(
     contactos.nombre.toLowerCase().includes(search.toLocaleLowerCase())
  ))


  return (
    <div>
      <h2>Contactos</h2>

     <input 
     type="text" 
     className="form form-control w-25"  
     placeholder="Buscar un contacto"
     value={search}
     onChange={onChangeSearch}
     
     />

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
            : filtrarContactos.map((datos, index) => (
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
