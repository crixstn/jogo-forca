export default function Jogo({palavras, palavra, setPalavra, palavragame, setPalavragame, erros}){

    function EscolherPalavra(){
        let i = Math.floor(Math.random() * palavras.length);
        const sortPalavra = (palavras[i].split(""));
        const rendPalavra = [];
        setPalavra(sortPalavra);
        for(let i = 0; i < sortPalavra.length; i++){
            rendPalavra.push("_ ");
        }
        setPalavragame(rendPalavra);
    }


    return(
        <>
            <div className="jogo">

                <img className="imagem" 
                src={`Assets/forca${erros}.png`}
                />

                <div className="jogochild">
                    <button onClick={EscolherPalavra} className="escolherpalavra">
                        Escolher Palavra
                    </button>
                    
                    <h1 className="palavra">
                        {palavragame}
                    </h1>
                </div>

            </div>
        </>
    )
}