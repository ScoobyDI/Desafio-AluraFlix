import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const categorias = [
        "Front End",
        "Back End",
        "Innovación y gestión"
    ] 

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value);
        props.actualizarEquipo(e.target.value)
    }

    return (
        <div className="select__container">
            <label className="select__name">Categoría</label>
            <select className="select" value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
                { categorias.map((categoria, index) => {
                    return <option className="options" key={index} value={categoria}>{categoria}</option>
                })}
            </select>
        </div>
    )
}

export default ListaOpciones