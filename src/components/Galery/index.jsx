import Tags from "../Tags";
import styles from './Galery.module.scss';
import imgs from './img.json';

import Cards from "./Cards";


const Galery = () => {
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <Cards itens={imgs} styles={styles}/>
        </section>
    )
}

export default Galery;