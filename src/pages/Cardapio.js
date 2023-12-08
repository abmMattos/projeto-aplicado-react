import Header from "../components/Header/Header";
import linhaTituloEsquerda from '../assets/linhas-titulo-esquerda.svg';
import linhaTituloDireita from '../assets/linhas-titulo-direita.svg';
import './main-cardapio.css';
import TiposCard from "../components/TiposCard";
import img from '../assets/caseiro.svg';
import CardapioCard from "../components/CardapioCard";
import carne from '../assets/image 11.png';

function Cardapio() {
    return (
        <div>
            <Header titulo="Cardapio" tituloAmarelo="COMIDARIA" />
            <main>
                <section className="diferencial-home">
                    <TiposCard img={img} titulo="Comida Caseira" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
                </section>
                <section className="titulo-pagina">
                    <div className="linhas-titulo">
                        <img src={linhaTituloEsquerda} alt="" />
                    </div>
                    <div>
                        <h1 id="cardapio-titulo">Cardápio</h1>
                    </div>
                    <div className="linhas-titulo">
                        <img src={linhaTituloDireita} alt="" />
                    </div>
                </section>
                <section className="categoria">
                    <div className="titulo-categoria">
                        <h2><u>Yakisoba</u></h2>
                    </div>
                    <div classNames="itens">
                        <CardapioCard img={carne} titulo="Yakisoba de Carne" descricao="Espaguete, cebola roxa, 
cenoura, couve-flor, brócolis, 
alcatra, repolho, champignon, " preco="15,90" />
                    </div>
                </section>
                <section className="categoria">
                    <div className="titulo-categoria">
                        <h2><u>Parmegiana e Strogonoff</u></h2>
                    </div>
                    <div className="itens">
                        <CardapioCard img={carne} titulo="Parmegiana" descricao="Espaguete, cebola roxa, 
cenoura, couve-flor, brócolis, 
alcatra, repolho, champignon, " preco="24,90" />
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Cardapio;