
import "./Imputs.css"

const Imputs = (props) => {

    const manejarCambio = (e) => {
       
        props.actualizarValor(e.target.value);
    }

    return (
        <div className='imput__container'>
            <label className='imput__name'>{props.titulo}</label>
            <input 
                className='imput' 
                placeholder={props.placeholder} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default Imputs