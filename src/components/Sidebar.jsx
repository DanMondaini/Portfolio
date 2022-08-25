import Avatar from "../img/img.jpg";
import pdf from '../doc/curriculo.pdf';
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
        <a href={pdf} className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar