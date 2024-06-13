import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { GestionDeContactos } from "../pages/GestionDeContactos";
import { Favoritos } from "../pages/Favoritos";
import { AgregarContacto } from "../pages/AgregarContactos.jsx";


export const AppRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GestionDeContactos />} />
          <Route path="/contactos" element={<Contact />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/agregar" element={<AgregarContacto />} />
        </Routes>
      </BrowserRouter>
  );
};
