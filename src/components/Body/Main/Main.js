import Diferencial from "./Diferencial";

function Main() {
    return (
        <main>
            <Diferencial />
            <section>
                <div class="sobrenos">
                    <div class="sobrenos-principal">
                        <h2 class="sobrenos-titulo"> Um Pouco <span class=" titulo-amarelo">Sobre Nós</span></h2>
                        <p class="sobrenos-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quidem neque
                            porro ex recusandae in magni
                            blanditiis, quae facilis non optio sequi, unde sint maiores. Ad ducimus voluptate tenetur quo.
                        </p>
                        <a class="sobrenos-texto botao-ver" href="">VER MAIS</a>
                    </div>
                    <div class="sobrenos-imgs">
                        <img class="sobrenos-img" src="/img1-sobrenos.svg" alt="" />
                    </div>
                    <div>
                        <img class="sobrenos-img" src="/img2-sobrenos.svg" alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div class="faca-pedido-home">
                    <div class="faca-pedido-bg-home">

                        <div>
                            <h2 class="faca-pedido-home-texto-h2"> Faça sua refeição com uma marmita <span
                                class=" titulo-amarelo">Personalizada</span><br /> por você</h2>
                            <p class="faca-pedido-home-texto">Marmitas personalizadas no conforto do seu <span
                                class=" titulo-amarelo">LAR</span> a partir de R$15,90!</p>
                            <a class="botao-ver-pedido" href="">FAÇA SEU PEDIDO</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="titulo-especialidade-home especialidades-bg">
                <div class="especialidade-organizacao">
                    <div id="titulo-sobre-nos">
                        <div class="linhas-titulo">
                            <img src="/linhas-titulo-esquerda.svg" alt="" />
                        </div>
                        <div>
                            <h2 class="especialidades-titulo">Nossas <span class="especialidades-titulo titulo-amarelo">Especialidades</span></h2>
                        </div>
                        <div class="linhas-titulo">
                            <img src="/linhas-titulo-direita.svg" alt="" />
                        </div>
                    </div>

                    <div class="especialidades-cardapio">
                        <img src="/seta-direita.svg" alt="" />
                        <div class="especialidades-cardapio-bg">
                            <img src="/img1-especialidade.png" alt="" />
                            <h2 class="especialidades-subtitulo">Massas e Caldos</h2>
                            <p class="especialidades-texto">A partir de R$15,90</p>
                        </div>
                        <div class="especialidades-cardapio-bg">
                            <img src="/img2-especialidade.png" alt="" />
                            <h2 class="especialidades-subtitulo">Yaksoba</h2>
                            <p class="especialidades-texto">A partir de R$23,90</p>
                        </div>
                        <div class="especialidades-cardapio-bg">
                            <img src="/img3-especialidade.png" alt="" />
                            <h2 class="especialidades-subtitulo">Parmegiana & Strogonoff</h2>
                            <p class="especialidades-texto">A partir de R$26,90</p>
                        </div>
                        <img src="/seta-esquerda.svg" alt="" />

                    </div>
                    <a class=" botao-ver-pedido botao-especialidade" href="">FAÇA SEU PEDIDO</a>
                </div>
            </section>

            <section class="galeria">

                <div>
                    <div class="galeria-titulo">
                        <div class="linhas-titulo">
                            <img src="/linhas-titulo-esquerda.svg" alt="" />
                        </div>
                        <div>
                            <h2 class="especialidade-h2-titulo">Galeria</h2>
                        </div>
                        <div class="linhas-titulo">
                            <img src="/linhas-titulo-direita.svg" alt="" />
                        </div>
                    </div>
                    <div>

                        <div class="galeria-img">
                            <img id="dois" src="/galeria-img1.png" alt="comida 1" height="440px" width="372px" />
                            <img src="/galeria-img2.png" alt="comida 2" height="228px" width="370px" />
                            <img src="/galeria-img3.png" alt="comida 5" height="228px" width="336px" />
                            <img id="normal" src="/galeria-img4.png" alt="comida 3" height="209px" />
                            <img id="meio" src="/galeria-img5.png" alt="comida 4" height="209px" />
                        </div>
                        <div class="galeria-link">
                            <img src="/instagram.svg" alt="instagram" />
                            <a href="https://www.instagram.com/comidaria.express/">VER MAIS</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="">
                <div class="funcionamento-bg funcionamento-align">
                    <div class="linhas-titulo-funcionamento funcionamento-titulo">
                        <img src="/linhas-titulo-esquerda.svg" alt="" />
                        <h2 class="funcionamento-titulo">Funcionamento</h2>
                        <img src="/linhas-titulo-direita.svg" alt="" />
                    </div>

                    <div class="funcionamento">
                        <p class="funcionamento-home-texto">Segunda-Feira: <span
                            class="titulo-amarelo">........................................</span> 10:30 ás 00:00</p>
                        <p class="funcionamento-home-texto">Terça-Feira: <span
                            class="titulo-amarelo">.............................................</span> 10:30 ás 00:00
                        </p>
                        <p class="funcionamento-home-texto">Quarta-Feira: <span
                            class="titulo-amarelo">...........................................</span> 10:30 ás 00:00</p>
                        <p class="funcionamento-home-texto">Quinta-Feira: <span
                            class="titulo-amarelo">...........................................</span> 10:30 ás 00:00</p>
                        <p class="funcionamento-home-texto">Sexta-Feira: <span
                            class="titulo-amarelo">.............................................</span> 10:30 ás 00:00
                        </p>
                        <p class="funcionamento-home-texto">Sabádo: <span
                            class="titulo-amarelo">.........................</span> 11:00 ás 15:00 / 18:00 ás 23:00</p>
                        <p class="funcionamento-home-texto ultimo-p">Domingo: <span
                            class="titulo-amarelo">..................................................</span> 11:00 ás
                            15:00</p>
                    </div>

                </div>

            </section>

        </main>
    )
}

export default Main;



