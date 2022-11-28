export default function Letras({palavra, setPalavra, palavragame, setPalavragame, erros, setErros, desabilitado, setDesabilitado, lCertas, setlCertas, lselec, setlSelec, setRespostaPalavra}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const selecLetra = [];
    const attPalavra = [];

    const cont = erros + 1

    function selecionarLetra(l, el){

        el.classList.remove("letraHabilitada");
        el.classList.add("letraDesabilitada");
        el.disabled = desabilitado;

        console.log(`cont: ${cont}`);
        if(cont < 6){

            if(palavra.includes(l)){
                const lAcert = [...lCertas, l];
                setlCertas(lAcert);

                for(let i = 0; i < palavra.length; i++){
                    if(l === palavra[i]){
                        palavragame[i] =  l;
                        attPalavra.push(l);
                    }else{
                        attPalavra.push(palavragame[i]);
                    }
                }

                setPalavragame(attPalavra)
            
                if(palavra.join("") == attPalavra.join("")){
                    setPalavra("")
                    setRespostaPalavra("acertou");
                    setDesabilitado("letraDesabilitada");
                    setPalavragame(palavra);
                }

            }else{
                setErros(cont);
            }

        }else{
            setRespostaPalavra("errou");
            setPalavragame(palavra);
            setErros(cont);
            setErros(erros+1);
            setPalavra("");
            el.classList.remove("letraHabilitada");
            el.classList.add("letraDesabilitada");
            el.disabled = desabilitado;
            setDesabilitado("letraDesabilitada");
        }
    }


    return(
        <div  
        className="letrasContainer">
           {alfabeto.map((l) => 
           <button 
            className={lselec.includes(l) ? "letraDesabilitada" : desabilitado} 
            disabled={palavra.length === 0 || lselec.includes(l)} 
            onClick={(el) => selecionarLetra(l, el.target)}
            >
            {l.toUpperCase()}
            </button>)}
        </div>
    )
}