// Content.js
import React from "react";
import Button from "@mui/material/Button";

function Content() {
  const handleDownload = () => {
    console.log("Descargando archivo...");
    // Agregar lógica de descarga
  };

  const handleUpload = () => {
    console.log("Cargando archivo...");
    // Agregar lógica de carga
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDownload}
        style={{ margin: "10px" }}
      >
        Descargar Archivos
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleUpload}
        style={{ margin: "10px" }}
      >
        Cargar Archivos
      </Button>
    </div>
  );
}

export default Content;
