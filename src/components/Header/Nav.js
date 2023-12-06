import { Link } from 'react-router-dom';
import FacaSeuPedido from '../FacaSeuPedido';

function Nav() {
    return (
        <nav id="navegacao-header">
            <ul className="header-menu">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/sobre-nos">Sobre Nós</Link></li>
                <li> <Link to="/cardapio">Cardápio</Link></li>
                <li> <Link to="/contato">Contato</Link></li>
                <li className="faca-pedido"><FacaSeuPedido /></li>
            </ul>
        </nav>
    )
}

export default Nav;