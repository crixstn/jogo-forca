export default function Chute({palavra}){
    return(
        <div className="chute">
            <h2>
                Ja sei a palavra!
            </h2>
            <input  disabled={palavra.length === 0} ></input>
            <button>
                Chutar
            </button>
        </div>
    )
}