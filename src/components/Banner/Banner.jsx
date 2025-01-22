import "./Banner.css"
import banner from "../../assets/banner.png"

function Banner() {
    return (
        <section className="banner__contenedor">
            <img className="banner__img" src={banner} alt="banner.png" />
            <div className="banner__contenido">
                <div>
                    <h2>
                        FRONT END
                    </h2>
                    <p>Este challenge es una forma de aprendizaje. 
                        Es un mecanismo donde podrás comprometerte en la 
                        resolución de un problema para poder aplicar todos 
                        los conocimientos adquiridos en la formación React.</p>
                </div>
                <img className="banner__imagen-superpuesta"  src="" alt="" />
            </div>
        </section>
    )
}

export default Banner