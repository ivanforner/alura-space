import styles from './Tags.module.scss'
import imgs from '../../components/Galery/img.json'


const Tags = ({ tags, filterImgs, setItens }) => {

    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map(tag => {
                    return <li key={tag} onClick={() => filterImgs(tag)}>{ tag }</li>
                })}
                <li onClick={() => setItens(imgs)}>Todas</li>
            </ul>
        </div>
    )
}

export default Tags;