import "./Button.css"

function Button(props) {
  return (
    <button type="submit" className="header__boton">{props.children}</button>
  )
}

export default Button