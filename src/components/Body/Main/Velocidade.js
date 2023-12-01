import { useState } from "react";

function Velocidade() {
    const [adjetivos, setAdjetivos] = useState([
        {
            img: "/velocidade.svg",
            titulo: "Velocidade no Preparo",
            paragrafo: "lorem impsun",
        }
    ])
    return(
        <div class="diferencial-home-tipos">
                        <img class="diferencial-home-img" src={adjetivos.img} alt="" />
                        <h2 class="diferencial-home-h2">{adjetivos.titulo}Velocidade no Preparo</h2>
                        <p class="diferencial-home-texto">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Doloribus excepturi
                            alias
                            cupiditate iusto totam
                            reiciendis temporibus quam exercitationem aliquid, officia, quibusdam neque possimus dolorum
                            iste magni
                            quas
                            voluptate consequuntur hic!</p>
                    </div>  
    )
}
export default Velocidade;