import React, { useRef } from "react";
import { storage } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Button from "@mui/material/Button";

function Content() {
  const inputRef = useRef(null);

  const handleDownload = () => {
    console.log("Descargando archivo...");
    const fileRef = ref(storage, "plantilla/plantilla1.docx");
    getDownloadURL(fileRef)
      .then((url) => {
        // Crear un elemento <a> temporal para descargar el archivo
        const a = document.createElement("a");
        a.href = url;
        a.download = "plantilla1"; // El nombre con el que quieres guardar el archivo
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Error al descargar archivo:", error);
      });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    Array.from(files).forEach((file) => uploadFile(file));
  };

  const uploadFile = (file) => {
    if (!file) return;
    const BASE_NAME = "convocatoria_";
    const fileRef = ref(storage, `archivos/${BASE_NAME + v4()}`);
    uploadBytes(fileRef, file).then((snapshot) => {
      alert("Archivo cargado");
      // Opcional: Obtener y guardar la URL del archivo cargado
      // getDownloadURL(snapshot.ref).then((url) => {
      //   setImageUrls((prev) => [...prev, url]);
      // });
    });
  };

  const handleUploadClick = () => {
    inputRef.current.click();
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
