import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import styles from './Home.module.scss'


const Home = () => {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
        </>
    )
}

export default Home;