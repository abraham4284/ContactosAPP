import React, { createContext, useState, useContext, useReducer } from "react";
import { contactoReducer } from "../reducer/ContactosReducer";

const ContactosContext = createContext();

export const UseContactos = () => {
  const context = useContext(ContactosContext);
  if (!context) {
    throw new Error('El useContactos debe estar dentro de un ContactosProvider');
  }
  return context;
};

const localStorageContatos = localStorage.getItem('contactos')
console.log(localStorageContatos)

const valorInicial = {
    contactos: JSON.parse(localStorageContatos),
    favoritos: false
}

export const ContactosProvider = ({ children }) => {
//   const [contacto, setContacto] = useState([]);

    const [state, dispatch] = useReducer(contactoReducer, valorInicial);

  const addContacto = (data) => {
      dispatch({type:"Agregar_Contactos", payload: data})
  };

  const addFavorito = (id)=>{
    dispatch({type: "Agregar_Favorito", payload: id})
  }

  const updateContacto = (data)=>{
    dispatch({type:"Editar_Contacto", payload: data})
  }

  const deleteContacto = (id)=>{
    dispatch({type:"Eliminar_Contacto", payload: id})
  }

  return (
    <ContactosContext.Provider value={{  state, addContacto, addFavorito, deleteContacto,updateContacto }}>
      {children}
    </ContactosContext.Provider>
  );
};
