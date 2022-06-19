import styles from './Header.module.scss';

function Header ()
{
    return(
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <div className={styles.menu}>
                <div className={styles.btnMenu}></div>
                <div className={styles.map}></div>
                <a href="tel: 8 981 120-11-17"><p>8 981 120-11-17</p></a>
            </div>

            <div className={styles.logo}>
                <div></div>
                <div className={styles.logoImg}></div>
            </div>

            <div className={styles.search}>
                <div className={styles.basketImg}></div>
                <div className={styles.mailImg}></div>
                <div className={styles.searchImg}></div>
            </div>
            </div>
        </div>    
    )
    
}




export default Header;
