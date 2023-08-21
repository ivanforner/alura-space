import Header from "components/Header";
import Menu from "components/Menu";
import Banner from "components/Banner";
import Galery from "components/Galery";
import Footer from "components/Footer";
import styles from './Home.module.scss'
import Popular from "components/Popular";


const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner styles={styles}/>
                </section>
                <div className={styles.galeria}>
                    <Galery />
                    <Popular />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;