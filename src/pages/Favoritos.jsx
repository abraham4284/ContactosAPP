import React from 'react'
import { UseContactos } from '../context/ContactosContext'

export const Favoritos = () => {

  const { state } = UseContactos();
  
  const favoritos = state.contactos.filter(datos=> datos.favorito === true);

  return (
    <>
    <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            
          </tr>
        </thead>
        <tbody>
          {favoritos.length === 0
            ? "No hay favoritos"
            : favoritos.map((datos, index) => (
                <tr key={index}>
                  <th>{datos.nombre}</th>
                  <th>{datos.email}</th>
                  <th>{datos.telefono}</th>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  )
}
