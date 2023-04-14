import { NavLink } from "react-router-dom";
import Ikon from "../../assets/img/shopping-cart.png";
import logo from "../../assets/img/logo.svg";
import style from "./footer.module.css";

const Footer = ({ setActive }) => {
  return (
    <footer>
      <NavLink to={"/"}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
      </NavLink>
      <nav className={style.nav}>
        <NavLink className={style.navlink} to={"/"}>
          Главная
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          Каталог
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          Скидки
        </NavLink>
      </nav>
      <div className={style.btns_header}>
        <div className={style.ikon} onClick={() => setActive(true)}>
          <img src={Ikon} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
