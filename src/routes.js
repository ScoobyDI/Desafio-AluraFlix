import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import NuevoVideo from "pages/NuevoVideo/NuevoVideo";

function AppRoutes() {
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/nuevo-video" element={<NuevoVideo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;

//para poner a la pagina Inicio como la del proyecto base
//Brouser Router avisa de que se van a estar manejando rutas desde esta funcion
//Routes tiene todas las rutas y el que se encarga de manejarlas
//Route es la ruta especifica a la que quiero redireccionar