import React, { useEffect, useState } from "react";
import { UseContactos } from "../context/ContactosContext.jsx";
import { v4 as uuidv4 } from 'uuid';

const initialValor = {
  id: uuidv4(),
  nombre: "",
  email: "",
  telefono: "",
  favorito: false,
};

export const AgregarContacto = ({dataToEdit,clearEdit}) => {
  const [form, setForm] = useState(initialValor);

 
  const { addContacto, updateContacto } = UseContactos();

  useEffect(()=>{
    if(dataToEdit){
      setForm(dataToEdit)
    }
  },[dataToEdit])


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.id){
      updateContacto(form)
    }else{
      addContacto(form)
    }
    setForm(initialValor)
    if(clearEdit) clearEdit()
  };

  return (
    <form action="" className="mt-5" onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="nombre" />
      <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="email" />
      <input type="text" name="telefono" value ={form.telefono} onChange={handleChange} placeholder="telefono" />
      <button type="submit" className="btn btn-primary">{ dataToEdit ? "Editar" : "Agregar" }</button>
    </form>
  );
};
