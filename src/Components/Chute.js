import Letras from "./Letras";
export default function Chute({setErros, palavra, setPalavra, chute, setChute, setRespostaPalavra, setPalavragame, desabilitado, setDesabilitado}){

    const acertou = "";
    const errou = "";

    function Chutar(){
        const respostaCerta = palavra.join("");
        const palavraChutada = chute.toLowerCase();
        if(palavraChutada === respostaCerta){
            console.log("deubom")
            setRespostaPalavra("acertou");
            setPalavra("");
            setDesabilitado("letraDesabilitada");
        }else{
            setRespostaPalavra("errou");
            setDesabilitado("letraDesabilitada");
            setErros(6)
            setPalavragame("palavra");
            setPalavra("");
        }

        setChute("")
    }

    return(
        <div className="chute">
            <h2>
                Ja sei a palavra!
            </h2>
            <input 
                disabled={palavra.length === 0}
                value={chute}
                onChange={(e) => setChute(e.target.value)}
            ></input>
            <button onClick={Chutar} disabled={palavra.length === 0}>
                Chutar
            </button>
        </div>
    )
}