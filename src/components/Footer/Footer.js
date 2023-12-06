import Direitos from './Direitos';
import LogoFooter from './LogoFooter';
import NavContato from './NavContato';
import NavInformacao from './NavInformacao';
import TituloFooterContato from './TituloFooterContato';
import TituloFooterInformacao from './TituloFooterInformacao';
import './footer.css';


function Footer() {
    return (
        <footer>
            <section id="conteudo-footer">
                <LogoFooter />
                <div id="contato-footer" class="conteudo">
                    <TituloFooterContato />
                    <NavContato />
                </div>
                <div id="informacoes-footer" class="conteudo">
                    <TituloFooterInformacao />
                    <NavInformacao />
                </div>
            </section>
            <Direitos />
        </footer>
    )
}

export default Footer;