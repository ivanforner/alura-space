import logo from './logo.png';
import search from './search.png'
import styles from './Header.module.scss'


const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Alura Space" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="O que você procura?"/>
                <img src={search} alt="Lupa" />
            </div>
        </header>
    )
}

export default Header;