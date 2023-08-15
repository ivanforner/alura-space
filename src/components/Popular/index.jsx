import popular from './popular.json';
import styles from './Popular.module.scss';

const Popular = () => {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {
                    popular.map(img => {
                        return (
                            <li key={img.id}>
                                <img src={img.path} alt={img.alt} />
                            </li>
                        )
                    })
                }
            </ul>
            <button> Ver mais fotos </button>
        </aside>
    )
}

export default Popular;