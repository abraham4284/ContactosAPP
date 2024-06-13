import { useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { ContactosProvider } from "./context/ContactosContext";

function App() {
  return (
    <>
      <ContactosProvider>
        <AppRoutes />
      </ContactosProvider>
    </>
  );
}

export default App;
