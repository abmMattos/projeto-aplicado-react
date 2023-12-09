import './Modal.css';

export default function Modal({isOpen, setOpen}) {
    if(isOpen) {
        return(
        <div className="bg-popup">
        <div className="principal-popup">
            <h2>Faça Seu Pedido</h2>
            <div>
                <div className="botao-popup">
                    <a href="">Whatsapp</a>
                </div>
                <div className="botao-popup"><a href="">Anota ai</a></div>
                <div className="botao-popup"><a href="">(48) 99946-3095</a></div>
                <button onClick={() => setOpen(!isOpen)}>Voltar</button>
                
            </div>
        </div>
    </div>
    )} else {
        return <></>
    }
    
} 