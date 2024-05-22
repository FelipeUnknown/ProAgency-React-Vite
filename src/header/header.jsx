import { useState } from "react";
import style from "../header/header.module.css";
import Logo from "../../src/assets/img/Logo.svg";
import iconBars from "../assets/img/iconBars.svg";
import iconClose from "../assets/img/iconClose.svg";
const Header =()=>{
    const [menuActive, setMenuActive] = useState(false);
    const links = [
        {name: "Home", link: "/"},
        {name: "Serviços", link: "/"},
        {name: "Recurso", link: "/"},
        {name: "Produto", link: "/"},
        {name: "Depoimentos", link: "/"},
        {name: "FAQ", link: "/"},        
    ];
    const toggleMenu = ()=>{
        setMenuActive(! menuActive);
    };
    return(
        <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
            <div className={style.headerWrapper}>
                <div className={style.headerLogo}>
                   <a href="/"><img src={Logo}/></a>
                </div>
                <button id={style.buttonMobile} onClick={toggleMenu}>
                    <img 
                    src={menuActive ? iconClose : iconBars} 
                    id={style.menuIcons}
                    alt="Icon Menu" />
                </button>
                <nav className={style.headerNav}>
                    <ul className={style.navUl} id={style.Menu}>
                        {links.map((link, index)=>(
                            <li className={style.navLi} key={link.name}>
                                <a href={link.link} className={style.linkA} key={index}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
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