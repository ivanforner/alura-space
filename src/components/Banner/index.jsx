import banner from './banner.png'


const Banner = ({ styles }) => {
    return (
        <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Imagem da terra vista do espaço" />
        </div>
    )
}

export default Banner;