function SobreNosHome(props) {
    return (
        <section>
            <div className="sobrenos">
                <div className="sobrenos-principal">
                    <h2 className="sobrenos-titulo"> {props.titulo} <span class=" titulo-amarelo">{props.tituloAmarelo}</span></h2>
                    <p className="sobrenos-texto">{props.texto} </p>
                    <a className="sobrenos-texto botao-ver" href="">{props.botao}</a>
                </div>
                <div className="sobrenos-imgs">
                    <img className="sobrenos-img" src={props.img1} alt="" />
                </div>
                <div>
                    <img className="sobrenos-img" src={props.img2} alt="" />
                </div>
            </div>
        </section>
    )
}
export default SobreNosHome;