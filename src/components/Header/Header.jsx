
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";

function Header() {
  return (
    <header className={styles.header}>
        <nav className={styles.header__contenedor}>
          <img className={styles.header__logo} src={logo} alt="AluraFlix Logo" />
          <div className={styles.header__contenedor__botones}>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/nuevo-video">
              <Button>Nuevo Video</Button>
            </Link>
          </div>
        </nav>
    </header>
  )
}

export default Header

//Link to sirve para que con ayuda del archivo routes.js me redireccione a donde quiera