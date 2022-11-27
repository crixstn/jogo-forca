export default function Letras({palavra, palavragame, setPalavragame, erros, setErros}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const selecLetra = [];
    const attPalavra = [];

    console.log(palavra)

    function selecionarLetra(l){

        if(palavra.includes(l)){
            selecLetra.push(l);
            console.log(selecLetra);

            for(let i = 0; i < palavra.length; i++){
                if(l === palavra[i]){
                    palavragame[i] =  l;
                    attPalavra.push(l);
                }else{
                    attPalavra.push(palavragame[i]);
                }
            }

            setPalavragame(attPalavra)

        }else{
            setErros(erros + 1);
        }

    }

    return(
        <ul  
        disabled={palavra.length === 0} 
        className="letrasContainer">
           {alfabeto.map((l) => 
           <li 
            className={`letra`} 
            onClick={() => selecionarLetra(l)}
            >
            {l}
            </li>)}
        </ul>
    )
}