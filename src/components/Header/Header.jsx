
import "./Header.modules.css";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <nav className="header__contenedor">
        <img className="header__logo" src={logo} alt="AluraFlix Logo" />
          <div className="header__contenedor__botones">
            <Button>Home</Button>
            <Button>Nuevo Video</Button>
          </div>
      </nav>
    </header>
  )
}

export default Header