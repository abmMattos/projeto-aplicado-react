import EspecialidadesCard from "./EspecialidadesCard";
import img1 from "../assets/img1-especialidade.png";
import FacaSeuPedido from "./FacaSeuPedido";
import linhaTituloEsquerda from "../assets/linhas-titulo-esquerda.svg"
import linhaTituloDireita from "../assets/linhas-titulo-direita.svg"
import img2 from "../assets/img2-especialidade.png";
import img3 from "../assets/img3-especialidade.png";
import setaDireita from "../assets/seta-direita.svg";
import setaEsquerda from "../assets/seta-esquerda.svg";
import './Especialidades.css';

function Especialidades() {
    return (
        <section className="titulo-especialidade-home especialidades-bg">
            <div className="especialidade-organizacao">
                <div id="titulo-sobre-nos">
                    <div className="linhas-titulo">
                        <img src={linhaTituloEsquerda} alt="" />
                    </div>
                    <div>
                        <h2 className="especialidades-titulo">Nossas <span class="especialidades-titulo titulo-amarelo">Especialidades</span></h2>
                    </div>
                    <div className="linhas-titulo">
                        <img src={linhaTituloDireita} alt="" />
                    </div>
                </div>

                <div className="especialidades-cardapio">
                    <img src={setaDireita} alt="" />
                    <EspecialidadesCard img={img1} titulo="Massas e Caldos" texto="A partir de R$15,90" />
                    <EspecialidadesCard img={img2} titulo="Yakisoba" texto="A partir de R$23,90" />
                    <EspecialidadesCard img={img3} titulo="Parmegiana & Strogonoff" texto="A partir de R$26,90" />
                    <img src={setaEsquerda} alt="" />
                </div>
                <FacaSeuPedido />
            </div>
        </section>
    )
}
export default Especialidades;

