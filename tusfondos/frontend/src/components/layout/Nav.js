import '../../styles/layout.css';
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>Inicio</NavLink></li>
                <li><NavLink to="/NoticiasPage" className={({isActive}) => isActive ? "activo" : undefined}>Noticias</NavLink></li>
                <li><NavLink to="/RendimientosPage" className={({isActive}) => isActive ? "activo" : undefined}>Rendimientos</NavLink></li>
                <li><NavLink to="/ContactoPage" className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>

            </ul>

        </nav>
    );
}

export default Nav;