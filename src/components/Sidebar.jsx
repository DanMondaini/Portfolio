import Avatar from "../img/img.jpg";
import Social from "./Social"
import Info from "./Info"

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Daniel Mondaini" />
        <p className="title">Desenvolvedor</p>
        <Social />
        <Info />
        <a href="../doc/curriculo.pdf" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar