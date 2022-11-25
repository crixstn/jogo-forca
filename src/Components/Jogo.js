import Botao from "./Botao"
import Imagem from "./Imagem"

export default function Jogo(){
    return(
        <>
            <div className="jogo">
            <Imagem/>
            <div className="jogochild">
                <Botao/>
                <h1 className="palavra">
                    - - - - - - - - -
                </h1>
            </div>
            </div>
        </>
    )
}