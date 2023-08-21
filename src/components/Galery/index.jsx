import Tags from "../Tags";
import styles from './Galery.module.scss';
import imgs from './img.json';

import Cards from "./Cards";
import { useState } from "react";


const Galery = () => {
    const [itens, setItens] = useState(imgs);
    const tags = [...new Set(imgs.map(img => img.tag))];

    const filterImgs = (tag) => {
        const newImgs = imgs.filter(img => img.tag == tag);
        setItens(newImgs);
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filterImgs={filterImgs} setItens={setItens}/>
            <Cards itens={itens} styles={styles}/>
        </section>
    )
}

export default Galery;