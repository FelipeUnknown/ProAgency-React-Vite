import style from "../header/header.module.css"
import Logo from "../../src/assets/img/Logo.svg"
const Header =()=>{
    return(
        <header className={style.Header}>
            <div className={style.headerWrapper}>
                <div className={style.headerLogo}>
                   <a href="/"><img src={Logo}/></a>
                </div>
                <nav className={style.headerNav}>
                    <ul className={style.navUl}>
                        <li><a className={style.linkAH} href="/">Home</a></li>
                        <li><a className={style.linkA} href="/">Serviços</a></li>
                        <li><a className={style.linkA} href="/">Recurso</a></li>
                        <li><a className={style.linkA} href="/">Produto</a></li>
                        <li><a className={style.linkA} href="/">Depoimento</a></li>
                        <li><a className={style.linkA} href="/">FAQ</a></li>
                    </ul>

                </nav>
                <div className={style.headerBtns}>
                    <ul className={style.ulBtns}>
                        <li><a className={style.logBtn} href="/">Login</a></li>
                        <li><a className={style.regBtn} href="/">Registro</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
export default Header;