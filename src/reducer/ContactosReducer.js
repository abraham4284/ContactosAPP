export const contactoReducer = (state, action) => {

  console.log(state);
  console.log(action.payload)

  switch (action.type) {
    case "Agregar_Contactos":
      const newContactos = [...state.contactos, action.payload];
      localStorage.setItem("contactos", JSON.stringify(newContactos));
      return {
        ...state,
        contactos: newContactos,
      };

    case "Editar_Contacto":
      const updateContacto = state.contactos.map((contacto) =>
        contacto.id === action.payload.id ? { ...action.payload } : contacto
      );
      localStorage.setItem("contactos", JSON.stringify(updateContacto));
      return {
        ...state,
        contactos: updateContacto,
      };

    case "Eliminar_Contacto":
      const filterContactos = state.contactos.filter(
        (contacto) => contacto.id !== action.payload
      );
      localStorage.setItem("contactos", JSON.stringify(filterContactos));
      return {
        ...state,
        contactos: filterContactos,
      };

    case "Agregar_Favorito":
      const contactoFavorito = state.contactos.map((cont) =>
        cont.id === action.payload
          ? { ...cont, favorito: !cont.favorito }
          : cont
      );
      localStorage.setItem("contactos", JSON.stringify(contactoFavorito));
      return {
        ...state,
        contactos: contactoFavorito,
      };
    default:
      return state;
  }
};
