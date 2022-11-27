import { useState } from "react";
import Jogo from "./Components/Jogo"
import Letras from "./Components/Letras"
import Chute from "./Components/Chute"
import Palavras from "./Components/Palavras";

export default function App() {

  const 
  [palavra, setPalavra] = useState(""),
  [palavragame, setPalavragame] = useState(""),
  [erros, setErros] = useState(0);

  return (
    <>
    <Jogo
      palavras={Palavras}

      palavra={palavra}
      setPalavra={setPalavra}
      
      palavragame={palavragame}
      setPalavragame={setPalavragame}

      erros={erros}
      setErros={setErros}
    />
    <Letras
      palavra={palavra}

      palavragame={palavragame}
      setPalavragame={setPalavragame}

      erros={erros}
      setErros={setErros}
    />
    <Chute
      palavra={palavra}
    />
    </>
  );
}