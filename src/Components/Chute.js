import Letras from "./Letras";
import styled from 'styled-components';
export default function Chute({setErros, palavra, setPalavra, chute, setChute, setRespostaPalavra, setPalavragame, setDesabilitado}){

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
            setPalavragame(respostaCerta);
        }else{
            setRespostaPalavra("errou");
            setDesabilitado("letraDesabilitada");
            setErros(6)
            setPalavragame(respostaCerta);
        }

        setChute("")
    }

    return(
        <ContainerChute>
            <h2>
                Ja sei a palavra!
            </h2>
            <input 
                data-test="guess-input"
                disabled={palavra.length === 0}
                value={chute}
                onChange={(e) => setChute(e.target.value)}
            ></input>
            <button data-test="guess-button" onClick={Chutar} disabled={palavra.length === 0}>
                Chutar
            </button>
        </ContainerChute>
    )
}

const ContainerChute = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;

h2{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
}

input{
    width: 353px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    margin:0 15px;
    outline: none;
    padding: 5px;
}

button{
    width: 100px;
    height: 40px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #3C76A1;
    cursor: pointer;
}
`;
