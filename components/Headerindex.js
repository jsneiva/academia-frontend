import styles from './Headerindex.module.css'
import Link from 'next/link' 

export default () => {
    return (
        <>
            <Link  href="/">
                <a>
                    <img className={styles["logo"]} src="assets/Logo/Fitness.svg" id="logo" alt="Logo" />
                </a>
            </Link>
            
            <div className={styles["headerfundo"]}>
                
                <Link href="/studentArea" >
                    <a className={styles["btnlogin"]}>
                        <img src="assets/Icon/user.svg" id={styles["icon"]} />
                    </a>
                </Link>
                <div className={styles.btnlogin}>
                    <form >
                        <Link href="/login">
                            <a>
                            <button >Login</button>
                            </a>
                        </Link>
                        <Link href="/register">
                                <a>
                                <button >Registre-se</button>
                                </a>
                        </Link>
                    </form>
                </div>
                <ul className={styles["navbar"]} >
                    <li><Link href="/" ><a>Home</a></Link></li>
                    <li><Link href="/sobrenos" ><a>Sobre nós</a></Link></li>
                    <li><Link href="/gallery" ><a>Galeria</a></Link></li>
                    <li><Link href="/planos" ><a>Planos</a></Link></li>
                    <li><Link href="/blog" ><a>Blog</a></Link></li>
                    <li><Link href="/contact" ><a>Contato</a></Link></li>
                </ul>

            </div><a></a>
        </>
    )
}