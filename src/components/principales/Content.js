import React, { useRef } from "react";
import Button from "@mui/material/Button";

function Content() {
  const handleDownload = () => {
    console.log("Descargando archivo...");
    // Agregar lógica de descarga
  };

  const inputRef = useRef(null);

  const handleUploadClick = () => {
    // Abrir el selector de archivos
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log("Archivos seleccionados:", files);
    // Aquí iría la lógica para subir archivos a Google Drive o OneDrive
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
      <input
        ref={inputRef}
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleUploadClick}
        style={{ margin: "10px" }}
      >
        Cargar Archivos
      </Button>
    </div>
  );
}

export default Content;
