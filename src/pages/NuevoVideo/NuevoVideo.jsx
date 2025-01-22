import { useState } from "react";

import Imputs from "../../components/FormElements/Imputs";
import ListaOpciones from "../../components/FormElements/ListaOpciones";
import TextArea from "../../components/FormElements/TextArea";
import Button from "../../components/Button/Button";
import "./NuevoVideo.css";


const NuevoVideo = () => {
  
  const [titulo, actualizarTitulo] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [video, actualizarVideo] = useState("");
  const [equipo, actualizarEquipo] = useState("")
  
  const manejarEnvio = (e) => {
    e.preventDefault();
      console.log("Manejar Envio");
      
      let datosAEnviar = {
        titulo: titulo,
        imagen: imagen,
        video: video, 
        equipo: equipo
      }
      console.log(datosAEnviar)
  }
  
  return (
    <section className="formulario">
        <div className="formulario__contexto">
          <h2 className="formulario__titulo">NUEVO VIDEO</h2>
          <p className="formulario__descripcion">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEP </p>
        </div>
        <h3 className="formulario__subtitulo">Crear Tarjeta</h3>
        <form className="formulario__contenedor" onSubmit={manejarEnvio}>
            <Imputs
              type="text"
              titulo="Título" 
              placeholder="título del video" 
              required 
              valor={titulo}
              actualizarValor={actualizarTitulo}
            />
            <ListaOpciones 
              valor={equipo} 
              actualizarEquipo={actualizarEquipo}
            />
            <Imputs
              type="text"
              titulo="Imagen" 
              placeholder="link de la imagen" 
              required
              valor={imagen}
              actualizarValor={actualizarImagen}
            />
            <Imputs
              type="text" 
              titulo="Video" 
              placeholder="link del video" 
              required
              valor={video}
              actualizarValor={actualizarVideo}
            />
            <TextArea required />
            <div className="button__container">
              <Button>Guardar</Button>
              <Button>Limpiar</Button>
            </div>
        </form>
    </section>
  )
}

export default NuevoVideo