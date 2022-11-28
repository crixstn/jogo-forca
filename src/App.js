import { useState } from "react";
import Jogo from "./Components/Jogo"
import Letras from "./Components/Letras"
import Chute from "./Components/Chute"
import Palavras from "./Components/Palavras";
import { createGlobalStyle } from 'styled-components'

export default function App() {

  const 
  [palavra, setPalavra] = useState(""),
  [palavragame, setPalavragame] = useState(""),
  [erros, setErros] = useState(0),
  [desabilitado, setDesabilitado] = useState("letraDesabilitada"),
  [lCertas, setlCertas] = useState([]),
  [lselec, setlSelec] = useState([]),
  [chute, setChute] = useState(""),
  [respostaPalavra, setRespostaPalavra] = useState("");

  return (
    <>
    <GlobalStyle/>
    <Jogo
      palavras={Palavras}

      palavra={palavra}
      setPalavra={setPalavra}
      
      palavragame={palavragame}
      setPalavragame={setPalavragame}

      setlSelec={setlSelec}

      erros={erros}
      setErros={setErros}
      
      setDesabilitado={setDesabilitado}

      respostaPalavra={respostaPalavra}
      setRespostaPalavra={setRespostaPalavra}
    />
    <Letras
      palavra={palavra}
      setPalavra={setPalavra}

      palavragame={palavragame}
      setPalavragame={setPalavragame}

      erros={erros}
      setErros={setErros}

      desabilitado={desabilitado}
      setDesabilitado={setDesabilitado}

      lCertas={lCertas}
      setlCertas={setlCertas}

      lselec={lselec}
      setlSelec={setlSelec}

      setRespostaPalavra={setRespostaPalavra}
    />
    <Chute
      setErros={setErros}

      palavra={palavra}
      setPalavra={setPalavra}

      chute={chute}
      setChute={setChute}

      setRespostaPalavra={setRespostaPalavra}

      setPalavragame={setPalavragame}

      setDesabilitado={setDesabilitado}
    />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body{
    background-color: #FFFFFF; 
    padding: 20px 50px;
    font-family: 'Roboto';
 }


`