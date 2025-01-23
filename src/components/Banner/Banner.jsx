import styles from "./Banner.module.css"
import banner from "../../assets/banner.png"
import imgPrueba from "../../assets/imgPrueba.png"

function Banner() {
    return (
        <section className={styles.banner__contenedor}>
            <img className={styles.banner__img} src={banner} alt="banner.png" />
            <div className={styles.banner__contenido}>
                <div>
                    <h2>
                        FRONT END
                    </h2>
                    <p>Este challenge es una forma de aprendizaje. 
                        Es un mecanismo donde podrás comprometerte en la 
                        resolución de un problema para poder aplicar todos 
                        los conocimientos adquiridos en la formación React.</p>
                </div>
                <img className={styles.banner__imagen__superpuesta}  src={imgPrueba} alt="" />
            </div>
        </section>
    )
}

export default Banner