import style from "../hero/hero.module.css";
import heroImg from "../../assets/img/ilustracaoHero.svg";
import clientesLogo1 from "../../assets/img/Logo (1).svg";
import clientesLogo2 from "../../assets/img/Logo (2).svg";
import clientesLogo3 from "../../assets/img/Logo (3).svg";
import clientesLogo4 from "../../assets/img/Logo (4).svg";
import clientesLogo5 from "../../assets/img/Logo (5).svg";
import clientesLogo6 from "../../assets/img/Logo (6).svg";
import clientesLogo7 from "../../assets/img/Logo (7).svg";

const Hero = () => {
  return (
    <section className={style.Hero}>
      <div className={style.heroWrapper}>
        <div className={style.heroContent}>
            <div>
          <h1>
            Lições e insights de<span> 8 anos</span>
          </h1>
          <p>Onde expandir seu negócio como fotógrafo: site ou mídia social?</p>
          </div>
          <div className={style.heroImgDiv}>
            <img src={heroImg} alt="Imagem ilustrativa de um monitor" />
          </div>
        </div>
        <div className={style.heroSubTextDiv}> 
            <h2>Nossos clientes</h2>
            <p>Temos trabalhado com alguns clientes da Fortune 500+</p>
        </div>
        <div className={style.heroLogos}>
            <img src={clientesLogo1}/>
            <img src={clientesLogo2}/>
            <img src={clientesLogo3}/>
            <img src={clientesLogo4}/>
            <img src={clientesLogo5}/>
            <img src={clientesLogo6}/>
            <img src={clientesLogo7}/>
        </div>
      </div>
    </section>
  );
};
export default Hero;
