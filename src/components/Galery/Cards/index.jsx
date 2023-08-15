import favorito from './favorito.png';
import open from './open.png'


const Cards = ({ itens, styles }) => {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map(img => {
                return (
                    <li key={img.id} className={styles.galeria__card}>
                        <img
                            className={styles.galeria__imagem}
                            src={img.path}
                            alt={img.title}
                        />
                        <p className={styles.galeria__descricao}>{img.title}</p>
                        <div>
                            <p>{img.credits}</p>
                            <span>
                                <img src={favorito} alt="ícone coração de curtir" />
                                <img src={open} alt="ícone de abrir modal" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default Cards;