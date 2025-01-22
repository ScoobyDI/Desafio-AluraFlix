import "./TextArea.css";

function TextArea() {
  return (
    <div className="textAera__container">
        <label className="textArea__name">Descripción</label>
        <textarea type="text" className="textArea" placeholder="¿ de qué se trata el video ?" ></textarea>
    </div>
  )
}

export default TextArea